import React from "react";

import Text from "../Text";
import { Container } from "./styles";
import { color } from "../../theme";

interface Props {
  day: string;
  date: string;
  isFocused?: boolean;
}

const Days: React.FC<Props> = ({ date, day, isFocused }) => {
  return (
    <Container
      style={
        isFocused
          ? { backgroundColor: color.primary, borderColor: color.primary }
          : { borderColor: color.gray }
      }
    >
      <Text
        font="Gilroy-ExtraBold"
        size={17}
        style={{ color: color.text.secondary }}
      >
        {day}
      </Text>
      <Text size={17} style={{ color: color.text.secondary }}>
        {date}
      </Text>
    </Container>
  );
};

export default Days;
