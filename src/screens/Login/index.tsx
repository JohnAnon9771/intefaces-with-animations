import React from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";

import { StackParamList } from "../../navigation";

type Props = StackScreenProps<StackParamList, "Login">;

const Login: React.FC<Props> = ({ navigation }) => {
  return (
    <View>
      <TouchableWithoutFeedback onPress={() => navigation.navigate("Home")}>
        <Text>Entrar</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Login;
