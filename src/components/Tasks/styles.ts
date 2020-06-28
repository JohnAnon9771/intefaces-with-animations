import styled from "styled-components/native";
import { Dimensions } from "react-native";

import { color } from "../../theme";

const { height } = Dimensions.get("window");
export const CARD_HEIGHT = height * 0.3;

export const Container = styled.View`
  background: #fff;
  padding: 15px;
  border-radius: 20px;
  overflow: hidden;
  height: ${CARD_HEIGHT}px;
  margin-top: 30px;
`;

export const Content = styled.View`
  justify-content: space-around;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const More = styled.View`
  justify-content: center;
  align-items: center;
  background-color: ${color.background.primary};
  top: -16px;
  right: -15px;
  height: 52px;
  width: 44px;
  border-bottom-left-radius: 20px;
  border-top-right-radius: 20px;
  position: absolute;
`;

export const Date = styled.View`
  flex-direction: row;
  font-size: 15px;
  margin-top: 10px;
`;

export const Footer = styled.View`
  position: absolute;
  bottom: 10px;
  left: 10px;
`;

export const ButtonPriority = styled.View`
  background-color: ${color.red};
  padding: 10px;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  margin-right: 13px;
`;

export const ButtonOnGoing = styled.View`
  background-color: ${color.green};
  padding: 10px;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
`;

export const BlockText = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const BlockButtons = styled.View`
  flex-direction: row;
`;
