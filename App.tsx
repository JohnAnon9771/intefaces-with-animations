import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { enableScreens } from "react-native-screens";

import Routes from "./src/navigation";
import { color } from "./src/theme";

export default function App() {
  enableScreens();
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
