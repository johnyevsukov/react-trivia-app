import styled from "styled-components";
import { Text } from "./Text";
import { fontSizeCss } from "./Text";

export const Heading = styled(Text).attrs({
  $weight: "bold",
  as: "h1",
})`
  font-family: "Press Start 2P";
  text-align: center;
  ${fontSizeCss.lg}
  line-height: 28px;

  @media (min-width: 768px) {
    ${fontSizeCss.xl}
    line-height: 38px;
  }
`;
