import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createStackNavigator<StackParamList>();
export const Tab = createBottomTabNavigator();

import Login from "../screens/Login";
import Home from "../screens/Home";

import { color } from "../theme";

export type StackParamList = {
  Home: undefined;
  Login: undefined;
};

const BottomTabRoute: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Tasks" component={Home} />
      <Tab.Screen name="Notifications" component={Home} />
      {/* <Tab.Screen name="Home" component={Home} /> */}
    </Tab.Navigator>
  );
};

const Routes: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: color.background.primary },
      }}
    >
      <Stack.Screen name="Home" component={BottomTabRoute} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default Routes;
