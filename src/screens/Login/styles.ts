import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { BaseButton } from "react-native-gesture-handler";

const { height } = Dimensions.get("window");

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Block = styled.View`
  flex-direction: row;
  height: 70%;
  width: 100%;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  top: -70px;
  border-bottom-left-radius: ${(height * 0.7) / 2}px;
`;

export const BlockText = styled.View`
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
`;

export const Ilustration = styled.Image`
  border-bottom-left-radius: ${(height * 0.5) / 2}px;
  height: 70%;
  width: 100%;
`;

export const Button = styled(BaseButton)`
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  width: 70px;
  height: 70px;
  border-radius: 50px;
`;
