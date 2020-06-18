import React from "react";
import { StatusBar } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";

import { StackParamList } from "../../navigation";

import ilustration from "../../assets/ilustration.png";

import { Container, Block, Ilustration, BlockText, Button } from "./styles";
import Text from "../../components/Text";

import { color } from "../../theme";

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
        <Ionicons name="ios-arrow-forward" size={32} color={color.icons} />
      </Button>
    </Container>
  );
};

export default Login;
