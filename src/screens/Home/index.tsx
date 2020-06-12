import React from "react";

import Text from "../../components/Text";
import { BlockText, BlockScrollView } from "./styles";

const Home: React.FC = () => {
  return (
    <BlockScrollView>
      <BlockText>
        <Text font="Gilroy-ExtraBold">
          Para meu amor. Nosso pequenos momentos...
        </Text>
        <Text>(Alguns deles, não registramos tudo...)</Text>
      </BlockText>
    </BlockScrollView>
  );
};

export default Home;
