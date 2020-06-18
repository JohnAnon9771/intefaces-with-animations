import React from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { Feather } from "@expo/vector-icons";

import { StackParamList } from "../../navigation";

import Text from "../../components/Text";
import { Container, Header, Photo } from "./styles";

import photo from "../../assets/photo.png";

import { color } from "../../theme";
import { StatusBar } from "react-native";

type Props = StackScreenProps<StackParamList, "Home">;

const Home: React.FC<Props> = ({ route }) => {
  return (
    <Container style={{ backgroundColor: color.background.primary }}>
      <Header>
        <Photo source={photo} />
        <Feather name="search" size={32} color={color.icons} />
      </Header>
    </Container>
  );
};

export default Home;
