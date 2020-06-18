import React from "react";
import { FlatList } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { Feather } from "@expo/vector-icons";

import { StackParamList } from "../../navigation";

import Text from "../../components/Text";
import Days from "../../components/Days";
import { Container, Header, Photo, Main, Content, BlockCard } from "./styles";

import photo from "../../assets/photo.png";

import { color } from "../../theme";
import { data } from "../../data";
import Card from "../../components/Card";

type Props = StackScreenProps<StackParamList, "Home">;

const Home: React.FC<Props> = ({ route }) => {
  return (
    <Container style={{ backgroundColor: color.background.primary }}>
      <Header>
        <Photo source={photo} />
        <Feather name="search" size={32} color={color.icons} />
      </Header>
      <FlatList
        data={data}
        style={{ marginLeft: 23, top: 85 }}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => `${index}`}
        renderItem={({ item }) => <Days date={item.date} day={item.day} />}
      />
      <Main>
        <Content>
          <Text
            font="Gilroy-ExtraBold"
            size={20}
            style={{ color: color.text.primary }}
          >
            Minhas tarefas
          </Text>
          <BlockCard>
            <Card color={color.green} preFix="Em" label="Progresso" tasks="5" />
            <Card
              color={color.orange}
              preFix="Tarefas"
              label="Completadas"
              tasks="37"
            />
            <Card color={color.violet} preFix="Em" label="Review" tasks="7" />
          </BlockCard>
          <Text
            font="Gilroy-ExtraBold"
            size={20}
            style={{ color: color.text.primary }}
          >
            Tarefas Ativas
          </Text>
        </Content>
      </Main>
    </Container>
  );
};

export default Home;
