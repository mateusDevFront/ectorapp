import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #2C2B2B;
`
export const ViewText = styled.View`
    padding-left: 10px;
    margin-top: 45px;
    margin-bottom: 20px;
`
export const Title = styled.Text`
    color: #fff;
    font-size: 27px;
    font-weight: bold;
`
export const Description = styled.Text`
  color: #fff;
      font-size: 17px;
    font-weight: 300;
`
export const ContainerButtons = styled.View`
    padding: 0 10px;
`
export const ContainerDualButton = styled.View`
    flex-direction: row;
    padding: 0 10px;
    justify-content: space-around;
`