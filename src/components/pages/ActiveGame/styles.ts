import styled from "styled-components";
import { Text, fontSizeCss } from "../../atoms/Text";

export const QuestionCount = styled(Text).attrs({
  $size: "xs",
  $weight: "bold",
})`
  position: absolute;
  top: 15px;
  right: 15px;
  font-family: "Press Start 2P";

  @media (min-width: 768px) {
    ${fontSizeCss.md}
  }
`;
