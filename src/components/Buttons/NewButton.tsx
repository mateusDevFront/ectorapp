import React from "react";

import { Container,ContainerButtonNew, TextButton } from "./styles";

interface ButtonProps {
  onPress: () => void;
  title: string;
}

export function NewButton({onPress, title} : ButtonProps) {
  return (
      <ContainerButtonNew onPress={onPress}>
        <TextButton>{title}</TextButton>
      </ContainerButtonNew>
  );
}
