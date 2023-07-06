import styled, { css } from "styled-components";
import { fontSizeCss } from "../atoms/Text";
import { fontWeights } from "../atoms/Text";
import { colors } from "../../colors";

const baseButtonCss = css`
  border-radius: 24px;
  border: none;
  cursor: pointer;
  transition: background-color 0.1s ease-in-out;
`;

const buttonSizeCss = {
  sm: css`
    ${fontSizeCss.sm}
    padding: 5px 10px;
    font-weight: ${fontWeights.medium};
  `,
  md: css`
    ${fontSizeCss.md}
    padding: 8px 13px;
    font-weight: ${fontWeights.medium};
  `,
  lg: css`
    ${fontSizeCss.lg}
    padding: 12px 25px;
    font-weight: ${fontWeights.bold};
  `,
};

const buttonVariantCss = {
  black: css`
    background: ${colors.textBlack};
    color: ${colors.offWhite};

    &:hover,
    &:focus {
      background: ${colors.gray};
    }
  `,
  blue: css`
    background: ${colors.calmBlue};
    color: ${colors.offWhite};

    &:hover,
    &:focus {
      background: ${colors.lightBlue};
    }
  `,
  purple: css`
    background: ${colors.pastelPurple};
    color: ${colors.offWhite};

    &:hover,
    &:focus {
      background: ${colors.lightPastelPurple};
      color: ${colors.textBlack};
    }

    &:disabled {
      cursor: not-allowed;
      background: ${colors.lighterPastelPurple};
      color: ${colors.lightGray};
    }
  `,
};

export const Button = styled.button<{
  $size?: "sm" | "md" | "lg";
  $variant?: "black" | "blue" | "purple";
}>`
  ${baseButtonCss}
  ${({ $size }) => ($size ? buttonSizeCss[$size] : buttonSizeCss.lg)}
  ${({ $variant }) =>
    $variant ? buttonVariantCss[$variant] : buttonVariantCss.black}
`;
