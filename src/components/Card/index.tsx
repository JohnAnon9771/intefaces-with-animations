import React, { memo } from "react";
import { ImageSourcePropType, StyleProp, ViewStyle } from "react-native";

import Text from "../Text";
import { Block, BlockCard, CardImage } from "./styles";

interface Props {
  date: string;
  source: ImageSourcePropType;
  label: string;
  style?: StyleProp<ViewStyle>;
}

const Card: React.FC<Props> = ({ style, source, label, date }) => {
  return (
    <Block style={style}>
      <Text>{date}</Text>
      <BlockCard
        style={{
          elevation: 11,
        }}
      >
        <CardImage source={source} resizeMode="contain" />
        <Text
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            padding: 6,
          }}
        >
          {label}
        </Text>
      </BlockCard>
    </Block>
  );
};

export default memo(Card);
