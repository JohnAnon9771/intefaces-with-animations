import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";
import { Feather, Ionicons } from "@expo/vector-icons";

import Text from "../Text";

import {
  Container,
  Content,
  Header,
  More,
  Date,
  Footer,
  ButtonPriority,
  ButtonOnGoing,
  BlockText,
  BlockButtons,
  CARD_HEIGHT as DEFAULT_CARD_HEIGHT,
} from "./styles";
import { color } from "../../theme";

import { Props } from "./types";

const { height: wHeight } = Dimensions.get("window");

const styles = StyleSheet.create({
  date: {
    fontSize: 12,
    opacity: 0.25,
    marginLeft: 5,
    fontWeight: "bold",
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
});

const { cond, eq, set, add, Value, sub, interpolate, Extrapolate } = Animated;

export const MARGIN = 16;
export const CARD_HEIGHT = DEFAULT_CARD_HEIGHT + MARGIN * 2;
const height = wHeight - 64;

const Tasks: React.FC<Props> = ({
  index,
  y,
  title,
  date,
  description,
  author,
}) => {
  const position = sub(index * CARD_HEIGHT, y);
  const isDisappearing = -CARD_HEIGHT;
  const isTop = 0;
  const isBottom = height - CARD_HEIGHT;
  const isAppearing = height;
  const translateY = add(
    add(
      y,
      y.interpolate({
        inputRange: [0, 0.00001 + index * CARD_HEIGHT],
        outputRange: [0, -index * CARD_HEIGHT],
        extrapolateRight: Extrapolate.CLAMP,
      })
    ),
    interpolate(position, {
      inputRange: [isBottom, isAppearing],
      outputRange: [0, -CARD_HEIGHT / 4],
      extrapolate: Extrapolate.CLAMP,
    })
  );
  const scale = interpolate(position, {
    inputRange: [isDisappearing, isTop, isBottom, isAppearing],
    outputRange: [0.5, 1, 1, 0.5],
    extrapolate: Extrapolate.CLAMP,
  });

  const opacity = interpolate(position, {
    inputRange: [isDisappearing, isTop, isBottom, isAppearing],
    outputRange: [0.5, 1, 1, 0.5],
    extrapolate: Extrapolate.CLAMP,
  });
  return (
    <Container
      style={{
        elevation: 10,
        transform: [{ translateY }, { scale }],
        opacity,
      }}
    >
      <Header>
        <Text font="Gilroy-ExtraBold">{title}</Text>
        <More>
          <Feather name="more-horizontal" size={28} color={color.icons} />
        </More>
      </Header>
      <Date>
        <Ionicons name="ios-timer" size={16} color={color.green} />
        <Text style={styles.date}>{date}</Text>
      </Date>
      <Content>
        <Text>{description}</Text>
      </Content>
      <Footer>
        <BlockText>
          <Text size={12} font="Gilroy-ExtraBold">
            Assinado por:{" "}
          </Text>
          <Text size={14} font="Gilroy-ExtraBold">
            {author}
          </Text>
        </BlockText>
        <BlockButtons>
          <TouchableWithoutFeedback>
            <ButtonPriority>
              <Text
                font="Gilroy-ExtraBold"
                size={12}
                style={{ color: color.text.secondary }}
              >
                Maior prioridade
              </Text>
            </ButtonPriority>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>
            <ButtonOnGoing>
              <Text
                font="Gilroy-ExtraBold"
                size={12}
                style={{ color: color.text.secondary }}
              >
                Em andamento
              </Text>
            </ButtonOnGoing>
          </TouchableWithoutFeedback>
        </BlockButtons>
      </Footer>
    </Container>
  );
};

export default Tasks;
