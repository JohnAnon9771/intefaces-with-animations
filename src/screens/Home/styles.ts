import styled from "styled-components/native";
import Constants from "expo-constants";

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 30px;
  margin-right: 30px;
  /* margin-bottom: 17%; */
  top: ${Constants.statusBarHeight + 34}px;
`;

export const Photo = styled.Image`
  border-width: 2px;
  border-color: #fff;
  border-radius: 5px;
  height: 40px;
  width: 40px;
`;

export const Main = styled.View`
  background: #fff;
  height: 70%;
  z-index: 5;
  border-top-right-radius: 50px;
  border-top-left-radius: 50px;
`;

export const Content = styled.View`
  margin: 30px;
  margin-bottom: 5px;
`;

export const BlockCard = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 20px;
`;
