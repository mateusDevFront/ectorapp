import React from "react";

import { Container,ContainerButton, TextButton } from "./styles";

interface ButtonProps {
  onPress: () => void;
  title: any;
}

export function Button({onPress, title}: ButtonProps) {
  return (
    <Container>
      <ContainerButton onPress={onPress}>
        <TextButton>{title}</TextButton>
      </ContainerButton>
    </Container>
  );
}
