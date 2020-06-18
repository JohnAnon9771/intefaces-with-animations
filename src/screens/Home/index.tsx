import React from "react";
import { FlatList } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { Feather } from "@expo/vector-icons";

import { StackParamList } from "../../navigation";

import Text from "../../components/Text";
import Days from "../../components/Days";
import { Container, Header, Photo, BlockDays } from "./styles";

import photo from "../../assets/photo.png";

import { color } from "../../theme";
import { data } from "../../data";

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
        keyExtractor={(item, index) => `${index}`}
        renderItem={({ item }) => <Days date={item.date} day={item.day} />}
      />
    </Container>
  );
};

export default Home;
