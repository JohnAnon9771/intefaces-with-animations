import React, { useState, memo, useCallback } from "react";
import { FlatList, TouchableWithoutFeedback } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";

import Text from "../../components/Text";
import Card from "../../components/Card";
import { Block, BlockText, Line, BlockFooter } from "./styles";

import photo9 from "../../assets/photo9.jpg";
import line from "../../assets/Line1.png";

import { data as resources } from "../../../data";
import { StackParamList } from "../../navigation";

type Props = StackScreenProps<StackParamList, "Home">;

const Home: React.FC<Props> = ({ navigation }) => {
  const [data, setData] = useState(resources);

  const renderItem = useCallback(
    ({ item }) => (
      <>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("Details", { text: item.text })}
        >
          <Block style={{ margin: 20 }}>
            <Card date={item.date} label={item.label} source={item.source} />
          </Block>
        </TouchableWithoutFeedback>
        {item.legend ? (
          <Text
            font="Gilroy-ExtraBold"
            size={28}
            style={{ margin: 40, backgroundColor: "#fff", top: 40 }}
          >
            {item?.legend}
          </Text>
        ) : null}
      </>
    ),
    []
  );

  return (
    <>
      <Line source={line} />
      <Block>
        <BlockText>
          <Text font="Gilroy-ExtraBold">
            Para meu amor. Nosso pequenos momentos...
          </Text>
          <Text>(Alguns deles, não registramos tudo...)</Text>
        </BlockText>
        <FlatList
          data={data}
          maxToRenderPerBatch={4}
          initialNumToRender={5}
          removeClippedSubviews
          ListFooterComponent={(props) => (
            <Block {...props}>
              <Card
                date="16/04/20"
                label="Minha formatura..."
                source={photo9}
              />
              <BlockFooter>
                <Text
                  font="Gilroy-ExtraBold"
                  style={{
                    marginBottom: 150,
                    marginTop: 10,
                    justifyContent: "center",
                    alignContent: "center",
                  }}
                >
                  Te amo demais minha amada... queria ter feito mais por ti.
                </Text>
              </BlockFooter>
            </Block>
          )}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => `${item.id}`}
          renderItem={renderItem}
        />
      </Block>
    </>
  );
};

export default memo(Home);
