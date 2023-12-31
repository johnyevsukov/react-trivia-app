import styled, { css } from "styled-components";
import { fontSizeCss, fontWeights } from "../../atoms/Text";
import { Text } from "../../atoms/Text";
import { colors } from "../../../colors";

const choiceWrapperBackgroundCss = (isAnswered: boolean, correct: boolean) => {
  if (!isAnswered) {
    return css`
      background: ${colors.purple3};
    `;
  } else {
    if (correct) {
      return css`
        background: ${colors.green1};
      `;
    } else {
      return css`
        background: ${colors.red1};
      `;
    }
  }
};

export const ChoiceWrapper = styled.div<{
  $isAnswered: boolean;
  $correct: boolean;
}>`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: flex-end;
  padding: 5px 10px;
  border-radius: 20px;
  color: ${colors.offWhite};
  ${({ $isAnswered, $correct }) =>
    choiceWrapperBackgroundCss($isAnswered, $correct)};
`;

export const RadioInputLabel = styled.label`
  ${fontSizeCss.md}
  font-weight: ${fontWeights.bold};

  @media (min-width: 768px) {
    ${fontSizeCss.lg}
  }
`;

const checkedInputCss = (isAnswered: boolean, correct: boolean) => {
  if (!isAnswered) {
    return css`
      background: ${colors.purple2};
      border: 4px solid ${colors.purple4};
    `;
  } else {
    if (correct) {
      return css`
        background: ${colors.green2};
        border: 4px solid ${colors.green3};
      `;
    } else {
      return css`
        background: ${colors.red2};
        border: 4px solid ${colors.red3};
      `;
    }
  }
};

const checkedInputLabelCss = (isAnswered: boolean, correct: boolean) => {
  if (!isAnswered) {
    return css`
      color: ${colors.textBlack};
    `;
  }
  if (correct) {
    return css`
      color: ${colors.green4};
    `;
  } else {
    return css`
      color: ${colors.red3};
    `;
  }
};

export const RadioInput = styled.input<{
  $isAnswered: boolean;
  $correct: boolean;
}>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  opacity: 0;

  &:disabled {
    cursor: not-allowed;
  }

  ~ label {
    color: ${({ $isAnswered, $correct }) =>
      $isAnswered && $correct ? colors.green4 : null};
  }

  &:checked {
    ~ div {
      ${({ $isAnswered, $correct }) => checkedInputCss($isAnswered, $correct)};
      transform: rotate(-25deg);
    }
    ~ label {
      ${({ $isAnswered, $correct }) =>
        checkedInputLabelCss($isAnswered, $correct)};
    }
  }

  &:hover,
  &:focus {
    ~ label {
      color: ${({ $isAnswered }) => (!$isAnswered ? colors.textBlack : null)};
    }
  }
`;

export const SelectCircle = styled.div`
  min-width: 25px;
  min-height: 25px;
  width: 25px;
  height: 25px;
  margin-right: 10px;
  padding: 2px;
  background: ${colors.offWhite};
  border-radius: 50%;
  transition: transform 0.1s ease-in-out;

  @media (min-width: 768px) {
    min-width: 30px;
    min-height: 30px;
    width: 30px;
    height: 30px;
  }
`;

export const QuestionText = styled(Text).attrs({
  $size: "md",
  $weight: "bold",
})`
  @media (min-width: 768px) {
    ${fontSizeCss.lg}
  }
`;
