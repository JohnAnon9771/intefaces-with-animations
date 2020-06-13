import React from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { StackParamList } from "../../navigation";

import Constants from "expo-constants";
import { AntDesign } from "@expo/vector-icons";

import Text from "../../components/Text";
import { Block } from "./styles";

type Props = StackScreenProps<StackParamList, "Details">;

const Details: React.FC<Props> = ({ route, navigation }) => {
  const { text } = route.params;
  return (
    <>
      <AntDesign
        name="arrowleft"
        size={32}
        color="#000"
        onPress={() => navigation.goBack()}
        style={{ top: Constants.statusBarHeight + 24, left: 10 }}
      />
      <Block>
        <Text style={{ margin: 20 }} font="Gilroy-ExtraBold">
          {text}
        </Text>
      </Block>
    </>
  );
};

export default Details;
