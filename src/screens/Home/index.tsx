import React from "react";
import { View, Text } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";

import { StackParamList } from "../../navigation";

type Props = StackScreenProps<StackParamList, "Home">;

const Home: React.FC<Props> = () => {
  return (
    <View>
      <Text>Hello home!</Text>
    </View>
  );
};

export default Home;
