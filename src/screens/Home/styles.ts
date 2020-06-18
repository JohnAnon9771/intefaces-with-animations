import styled from "styled-components/native";
import Constants from "expo-constants";

export const Container = styled.View`
  flex: 1;
  /* justify-content: center;
  align-items: center; */
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  top: ${Constants.statusBarHeight + 34}px;
`;

export const Photo = styled.Image`
  border-width: 2px;
  border-color: #fff;
  border-radius: 5px;
  height: 40px;
  width: 40px;
`;
