import React, { createContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/navigation";

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
