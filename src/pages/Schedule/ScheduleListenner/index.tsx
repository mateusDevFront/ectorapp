import React from "react";

import {FlatList} from 'react-native'

import { Container, Title } from "./styles";
import { InputForm } from "../../../components/ComponentsInput/TextInput";

export function ScheduleListView() {
  return (
    <Container>
      <Title>Agendamentos{"\n"}Ter 02/01/2024</Title>

      <InputForm placeholder="Digite o nome..."/>

      <ContainerListView>
        <FlatList />
      </ContainerListView>
    </Container>
  );
}
