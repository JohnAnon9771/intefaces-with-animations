import styled from "styled-components/native";
import { Dimensions } from "react-native";
import Constants from "expo-constants";

const { width } = Dimensions.get("window");

export const BlockText = styled.View`
  align-items: center;
`;

export const BlockFooter = styled.View`
  margin: 40px;
`;

export const Block = styled.View`
  top: ${Constants.statusBarHeight + 14}px;
  align-items: center;
`;

export const Line = styled.Image`
  position: absolute;
  top: ${Constants.statusBarHeight + 64}px;
  right: ${width / 2}px;
  /* width: 20px; */
`;
