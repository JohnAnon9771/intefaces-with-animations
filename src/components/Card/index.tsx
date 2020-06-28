import React from "react";
import { StyleProp, ViewStyle } from "react-native";

import Text from "../Text";
import { Block } from "./styles";

import { color as colorText } from "../../theme";

interface Props {
  tasks: string;
  label: string;
  style?: StyleProp<ViewStyle>;
  color: string;
  preFix: string;
}

const Card: React.FC<Props> = ({ style, label, tasks, color, preFix }) => {
  return (
    <Block style={[style, { backgroundColor: color }]}>
      <Text
        size={25}
        font="Gilroy-ExtraBold"
        style={{ color: colorText.text.secondary }}
      >
        {tasks}
      </Text>
      <Text
        size={12}
        font="Gilroy-ExtraBold"
        style={{
          color: colorText.text.secondary,
        }}
      >
        {preFix}
      </Text>
      <Text
        size={12}
        font="Gilroy-ExtraBold"
        style={{
          color: colorText.text.secondary,
        }}
      >
        {label}
      </Text>
    </Block>
  );
};

export default Card;
