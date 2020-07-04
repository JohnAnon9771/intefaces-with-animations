import React, { useEffect, useState } from "react";
import { StatusBar, Alert } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { AntDesign } from "@expo/vector-icons";

import firebase from "firebase";
import { firebaseConfig } from "../../config/firebase";

import { StackParamList } from "../../navigation";

import ilustration from "../../assets/ilustration.png";

import { Container, Block, Ilustration, BlockText, Button } from "./styles";
import Text from "../../components/Text";

import { color } from "../../theme";

firebase.initializeApp(firebaseConfig);

type Props = StackScreenProps<StackParamList, "Login">;

const Login: React.FC<Props> = ({ navigation }) => {
  
  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <Block style={{ backgroundColor: color.background.secundary }}>
        <Ilustration source={ilustration} resizeMode="contain" />
      </Block>
      <BlockText>
        <Text
          font="Gilroy-ExtraBold"
          style={{ color: color.text.secondary }}
          size={22}
        >
          Trabalhe com Inteligência
        </Text>
        <Text style={{ color: color.text.secondary }}>
          Aplicativo inteligente de gerenciamento de tarefas
        </Text>
        <Text style={{ color: color.text.secondary }}>
          Agora tudo estará bem organizado {":)"}
        </Text>
      </BlockText>
      <Button
        style={{ backgroundColor: color.primary }}
        onPress={() => navigation.navigate("Home")}
      >
        <AntDesign name="google" size={32} color={color.icons} />
      </Button>
    </Container>
  );
};

export default Login;
