import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Routes } from "./src/routes/routes"

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
       backgroundColor={'transparent'} translucent={true} 
      />
      <Routes />
    </NavigationContainer>
  );
}
