import styled from "styled-components/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const Block = styled.View`
  /* margin: 15px; */
`;

export const BlockCard = styled.View`
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: #fff;
  width: ${wp("64%")}px;
  height: ${hp("27%")}px;
`;

export const CardImage = styled.Image`
  max-height: ${hp("20%")}px;
  width: 250px;
`;
