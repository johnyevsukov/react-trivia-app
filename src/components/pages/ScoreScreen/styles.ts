import styled from "styled-components";
import { fontSizeCss } from "../../atoms/Text";
import { Text } from "../../atoms/Text";

export const ScoreText = styled(Text).attrs({
  $size: "md",
  $weight: "bold",
})`
  @media (min-width: 768px) {
    ${fontSizeCss.lg}
  }
`;
