import styled, { keyframes } from "styled-components";
import { colors } from "../../../colors";
import { Text, fontSizeCss, fontWeights } from "../../atoms/Text";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const MainMenuCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 255, 255, 0.75);
  padding: 64px;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  z-index: 1;
`;

export const Title = styled(Text).attrs({
  $size: "xl",
  $weight: "bold",
})`
  font-family: "Press Start 2P";
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LabelSelectWrapper = styled.div``;

export const SelectLabel = styled.label`
  ${fontSizeCss.lg}
  font-weight: ${fontWeights.bold};
`;

export const Select = styled.select``;

export const SelectOption = styled.option``;

export const LabelRadioInputWrapper = styled.div``;

export const RadioInputLabel = styled.label`
  ${fontSizeCss.lg}
  font-weight: ${fontWeights.bold};
`;

export const RadioInput = styled.input``;
