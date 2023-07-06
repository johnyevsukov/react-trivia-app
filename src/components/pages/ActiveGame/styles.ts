import styled from "styled-components";
import { Text, fontSizeCss, fontWeights } from "../../atoms/Text";

export const QuestionCount = styled(Text).attrs({
  $size: "md",
  $weight: "bold",
})`
  position: absolute;
  top: 15px;
  right: 15px;
  font-family: "Press Start 2P";
`;
