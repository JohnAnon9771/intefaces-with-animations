import Animated from "react-native-reanimated";
export interface Props {
  title: string;
  date: string;
  description: string;
  author: string;
  index: number;
  y: Animated.Value<number>;
}
