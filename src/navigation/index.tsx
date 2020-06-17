import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createStackNavigator<StackParamList>();
const Tab = createBottomTabNavigator();

import Home from "../screens/Home";
import Login from "../screens/Login";

export type StackParamList = {
  Home: undefined;
  Login: undefined;
};

const Routes: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: "#fff" },
      }}
    >
      <Stack.Screen name="Home" component={Home}>
        {() => (
          <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Tasks" component={Home} />
            <Tab.Screen name="Notifications" component={Home} />
            <Tab.Screen name="Home" component={Home} />
          </Tab.Navigator>
        )}
      </Stack.Screen>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default Routes;
