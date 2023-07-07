import styled, { css } from "styled-components";
import { Text, fontSizeCss } from "../../atoms/Text";
import { difficultyValueType } from "../../../types/gameTypes";
import { colors } from "../../../colors";

const getDifficultyTextBackgroundColor = (difficulty: difficultyValueType) => {
  if (difficulty === "easy") {
    return css`
      background-color: ${colors.green2};
    `;
  } else if (difficulty === "medium") {
    return css`
      background-color: ${colors.yellow1};
    `;
  } else if (difficulty === "hard") {
    return css`
      background-color: ${colors.red2};
    `;
  } else {
    return css`
      background-color: ${colors.purple2};
    `;
  }
};

export const QuestionCountTextWrapper = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
`;

export const QuestionCountText = styled(Text).attrs({
  $size: "xs",
  $weight: "bold",
})`
  font-family: "Press Start 2P";

  @media (min-width: 768px) {
    ${fontSizeCss.md}
  }
`;

export const HiddenOverflowContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 120px;
  width: 120px;
  overflow: hidden;
`;

export const DifficultyTextWrapper = styled.div<{
  $difficulty: difficultyValueType;
}>`
  position: absolute;
  top: 20px;
  left: -68px;
  padding: 2px;
  border-radius: 10px;
  transform: rotate(-45deg);
  width: 200px;
  ${({ $difficulty }) => getDifficultyTextBackgroundColor($difficulty)}

  @media (min-width: 768px) {
    top: 30px;
    left: -50px;
    padding: 5px;
  }
`;

export const DifficultyText = styled(Text).attrs({
  $size: "xs",
  $weight: "bold",
  $color: "textBlack",
  $align: "center",
})`
  font-family: "Press Start 2P";

  @media (min-width: 768px) {
    ${fontSizeCss.md}
  }
`;
