import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator<StackParamList>();

import Home from "../screens/Home";
import Details from "../screens/Details";

export type StackParamList = {
  Home: undefined;
  Details: { text: string };
};

const Routes: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: "#fff" },
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};

export default Routes;
