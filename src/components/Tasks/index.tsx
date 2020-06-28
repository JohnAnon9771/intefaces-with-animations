import React from "react";
import { StyleSheet } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
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
} from "./styles";
import { color } from "../../theme";

interface Props {
  title: string;
  date: string;
  description: string;
  author: string;
}

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

const Tasks: React.FC<Props> = ({ title, date, description, author }) => {
  return (
    <Container style={{ elevation: 10 }}>
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
