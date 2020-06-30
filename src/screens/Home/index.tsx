import React from "react";
import { FlatList, View } from "react-native";
import Animated from "react-native-reanimated";
import { onScrollEvent } from "react-native-redash";
import { StackScreenProps } from "@react-navigation/stack";
import { Feather } from "@expo/vector-icons";

import { StackParamList } from "../../navigation";

import Text from "../../components/Text";
import Days from "../../components/Days";
import Card from "../../components/Card";
import Tasks from "../../components/Tasks";
import { Container, Header, Photo, Main, Content, BlockCard } from "./styles";

import photo from "../../assets/photo.png";

import { color } from "../../theme";
import { data } from "../../data";

const { createAnimatedComponent, Value } = Animated;
const AnimatedFlatlist = createAnimatedComponent(FlatList);

type Props = StackScreenProps<StackParamList, "Home">;

const Home: React.FC<Props> = ({ route }) => {
  const y = new Value(0);
  const onScroll = onScrollEvent({ y });
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
          <View>
            <AnimatedFlatlist
              {...{ onScroll }}
              data={[1, 2, 3, 4]}
              scrollEventThrottle={16}
              showsVerticalScrollIndicator={false}
              keyExtractor={(index: number) => `${index}`}
              renderItem={({ index }) => (
                <Tasks
                  {...{ index, y }}
                  title="Estudar library reanimated e praticar"
                  date="28-06-20 12:04AM"
                  description="Estudar"
                  author="João Alves"
                />
              )}
            />
          </View>
        </Content>
      </Main>
    </Container>
  );
};

export default Home;
