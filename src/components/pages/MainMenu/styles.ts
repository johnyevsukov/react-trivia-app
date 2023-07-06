import styled, { keyframes } from "styled-components";
import { colors } from "../../../colors";
import { Text, fontSizeCss, fontWeights } from "../../atoms/Text";

export const MainMenuCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 255, 255, 0.7);
  padding: 64px;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  z-index: 1;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SelectLabel = styled(Text).attrs({
  $size: "sm",
  $weight: "bold",
})`
  font-family: "Press Start 2P";

  @media (min-width: 768px) {
    ${fontSizeCss.md}
  }
`;
