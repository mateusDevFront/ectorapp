import React from "react";

import {
  Container,
  ContainerPhoto,
  ViewText,
  Title,
  Description,
  ContainerButtons,
} from "./styles";

import { Button } from "../../components/Buttons";
import finishPhoto from "../../assets/images/finish.png";

import { Image, Linking } from "react-native";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackPramsList } from "../../routes/app.routes";

type DashboardRouteProps = RouteProp<StackPramsList, "Finish">;

type DashboardProps = {
  route: DashboardRouteProps;
  navigation: NativeStackNavigationProp<StackPramsList, "Finish">;
};

export function Finish({ route }: DashboardProps) {
  const navigation = useNavigation();

  const detail: any = route.params;

  const sendWhatsAppSchedule = () => {
    const { cliente, data, horario, servico, telefone } = detail.params.agendamento;
    const { formaDePagamento, preco } = detail.params.pagamento;

    const mensagem =
    `Olá, meu nome é ${cliente},
  
    Detalhes do agendamento:
    Data: ${data}
    Horário: ${horario}
    Serviço: ${servico}
  
    Valor a ser pago: R$ ${preco.toFixed(2)}
    Pagamento: ${formaDePagamento}

    Aguardamos sua visita!
  
    Atenciosamente,
    [Ector Barber - APP]`;

    const numeroBarbearia = "5585985413096";
    const url = `whatsapp://send?phone=${numeroBarbearia}&text=${encodeURIComponent(
      mensagem
    )}`;

    Linking.canOpenURL(url)
      .then((supported) => {
        if (supported) {
          return Linking.openURL(url);
        } else {
          console.error("Não é possível abrir o WhatsApp.");
        }
      })
      .catch((error) => console.error("Erro ao abrir o WhatsApp:", error));
  };

  return (
    <Container>
      <ContainerPhoto>
        <Image source={finishPhoto} />
      </ContainerPhoto>
      <ViewText>
        <Title>Agendamento{"\n"}feito com sucesso!</Title>
        <Description>
          Clique em concluir para ser{"\n"}
          direcionado para o WhatsApp
        </Description>
      </ViewText>
      <ContainerButtons>
        <Button
          title="Concluir"
          onPress={() => sendWhatsAppSchedule()}
        />
      </ContainerButtons>
    </Container>
  );
}
