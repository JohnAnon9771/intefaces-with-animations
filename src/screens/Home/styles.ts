import styled from "styled-components/native";
import Constants from "expo-constants";
import { ScrollView } from "react-native-gesture-handler";

export const BlockScrollView = styled(ScrollView).attrs({
  scrollVerticalIndicator: false,
})`
  top: ${Constants.statusBarHeight + 14}px;
`;

export const BlockText = styled.View`
  align-items: center;
`;
