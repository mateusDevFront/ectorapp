import React from "react";

import {
  Container,
  ViewText,
  Title,
  Description,
  ContainerButtons,
  ContainerDualButton,
} from "./styles";
import { Image } from "react-native";

import { Button } from "../../components/Buttons";
import { NewButton } from "../../components/Buttons/NewButton";

import welcomePhoto from "../../assets/images/welcomephoto.png";
import { useNavigation } from "@react-navigation/native";

export function Welcome() {
  const navigation = useNavigation();

  return (
    <Container>
      <Image source={welcomePhoto} />
      <ViewText>
        <Title>Seja bem-vindo</Title>
        <Description>
          Faça agora o agendamento{"\n"}
          do seu corte de cabelo{"\n"}
          com facilidade no ector.
        </Description>
      </ViewText>
      <ContainerButtons>
        <Button
          title="Fazer agendamento"
          onPress={() => navigation.navigate("Schedule")}
        />
      </ContainerButtons>
      {/* component barber admin */}
      <ContainerDualButton>
        <NewButton title="agendamentos" onPress={() => navigation.navigate("ScheduleListView")} />
        <NewButton title="configurações" onPress={() => {}} />
      </ContainerDualButton>
    </Container>
  );
}
