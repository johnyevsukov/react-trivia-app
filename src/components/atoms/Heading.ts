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

  @media (min-width: 768px) {
    ${fontSizeCss.xl}
  }
`;
