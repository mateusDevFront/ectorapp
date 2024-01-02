import React from "react";

import { Container,ContainerInput, TextInput,TitleInput } from "./styles";
import { TextInputProps as RNTextInputProps } from 'react-native';

interface CustomTextInputProps extends RNTextInputProps {
  value: string;
  onChangeText: (text: string) => void;
  titleInputProps: string;
  placeholder: string;
}

export function InputForm({titleInputProps, placeholder, onChangeText, value}: CustomTextInputProps) {
  return (
    <Container>
      <TitleInput>{titleInputProps}</TitleInput>
      <ContainerInput>
        <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#6B6B6B"/>
        
      </ContainerInput>
    </Container>
  );
}
