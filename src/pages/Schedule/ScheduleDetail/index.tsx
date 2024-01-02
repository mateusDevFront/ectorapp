import React, {useState} from "react";

import { Image } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import {
  Container,
  ContainerDetail,
  TitleDetail,
  BoxDetail,
  NameService,
  PriceService,
  BoxDetailSocial,
  NameSocial,
  ContainerButton,
  BoxResultPrice,
  TitlePrice,
  ResultPrice,
} from "./styles";
import { Button } from "../../../components/Buttons";
import detailphoto from "../../../assets/images/detailphoto.png";
import { StackPramsList } from "../../../routes/app.routes";
import {firebase} from '../../../api/Firebase'

import { ActivityIndicator } from "react-native";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  setDoc,
  getDoc,
} from "firebase/firestore";
import { format, addDays } from "date-fns";

type DashboardRouteProps = RouteProp<StackPramsList, "ScheduleDetail">;

type DashboardProps = {
  route: DashboardRouteProps;
  navigation: NativeStackNavigationProp<StackPramsList, "ScheduleDetail">;
};

type DetailParams = {
  date: string;
  hour: string;
  name: string;
  pagament: string;
  phone: string;
  price: number;
  service: string;
};

type RouteParams = {
  params: DetailParams;
};

export function ScheduleDetail({ route }: DashboardProps) {
  
  const firestore = firebase.firestore()
  const navigation = useNavigation();
  const detail: any = route.params;

  const [loading, setLoading] = useState(false);

  const enviarParaFirestore = async (detail: RouteParams["params"]) => {
    setLoading(true);
    const scheduleCollection = await firestore.collection("_AGENDAMENTOS");  
    const selectedDate = format(addDays(new Date(detail.date), 1), "yyyy-MM-dd");
  
    try {
      const selectedDocRef = doc(scheduleCollection, selectedDate);
      const selectedDocSnapshot = await getDoc(selectedDocRef);
  
      if (selectedDocSnapshot.exists()) {
        const detailSchedule = {
          agendamento: {
            cliente: detail.name,
            telefone: detail.phone,
            data: detail.date,
            horario: detail.hour,
            servico: detail.service,
          },
          pagamento: {
            formaDePagamento: detail.pagament,
            preco: detail.price,
          },
        };
  
        await addDoc(collection(selectedDocRef, "_HOJE"), detailSchedule);
        navigation.navigate("Finish", { params: detailSchedule });
        console.log(`Agendamento adicionado para a data ${selectedDate}.`);

      } else {
        const newDocRef = doc(scheduleCollection, selectedDate);
        
        const newDocData = {
          agendamento: {
            cliente: detail.name,
            telefone: detail.phone,
            data: detail.date,
            horario: detail.hour,
            servico: detail.service,
          },
          pagamento: {
            formaDePagamento: detail.pagament,
            preco: detail.price,
          },
        };
  
        await setDoc(newDocRef, newDocData);
        navigation.navigate("Finish", { params: newDocData });
        console.log(`Novo documento criado para a data ${selectedDate}.`);
      }
    } catch (error) {
      console.error("Erro ao adicionar agendamento: ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Image source={detailphoto} />
      <ContainerDetail>
        <TitleDetail>Detalhes</TitleDetail>
        <BoxDetail>
          <NameService>Seu nome</NameService>
          <PriceService>{detail.params.name}</PriceService>
        </BoxDetail>
        <BoxDetail>
          <NameService>Serviço</NameService>
          <PriceService>{detail.params.service}</PriceService>
        </BoxDetail>
        <BoxDetail>
          <NameService>Horário</NameService>
          <PriceService>{detail.params.hour}</PriceService>
        </BoxDetail>
        <BoxDetail>
          <NameService>Data</NameService>
          <PriceService>{detail.params.date}</PriceService>
        </BoxDetail>
      </ContainerDetail>
      <ContainerDetail style={{ marginBottom: 50 }}>
        <TitleDetail>Redes Sociais</TitleDetail>
        <BoxDetailSocial>
          <FontAwesome5 name="whatsapp-square" size={30} color="#85158F" />
          <NameSocial> 85 9 0000-000</NameSocial>
        </BoxDetailSocial>
        <BoxDetailSocial>
          <FontAwesome5 name="instagram-square" size={30} color="#85158F" />
          <NameSocial> @ectorbarber</NameSocial>
        </BoxDetailSocial>
      </ContainerDetail>
      <ContainerButton>
        <BoxResultPrice>
          <TitlePrice>Total a pagar</TitlePrice>
          <ResultPrice>R$ {detail.params.price}</ResultPrice>
        </BoxResultPrice>
            <Button
              onPress={() => enviarParaFirestore(detail.params)}
              title={<>{loading ? (<ActivityIndicator size="small" color="#fff" />) : ("agendar serviço")} </>}
            />
      </ContainerButton>
    </Container>
  );
}
