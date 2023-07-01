import styled, { css } from "styled-components";
import { colors, colorType } from "../../colors";

const fontWeight = {
  regular: 400,
  medium: 500,
  bold: 700,
};

const fontSize = {
  sm: css`
    font-size: 12px;
    line-height: 14px;
  `,
  md: css`
    font-size: 16px;
    line-height: 18px;
  `,
  lg: css`
    font-size: 22px;
    line-height: 24px;
  `,
  xl: css`
    font-size: 32px;
    line-height: 34px;
  `,
};

export const Text = styled.p<{
  $size?: "sm" | "md" | "lg" | "xl";
  $weight?: "regular" | "medium" | "bold";
  $color?: colorType;
}>`
  ${({ $size }) => ($size ? fontSize[$size] : fontSize.md)};
  font-weight: ${({ $weight }) =>
    $weight ? fontWeight[$weight] : fontWeight.regular};
  color: ${({ $color }) => ($color ? colors[$color] : colors.textBlack)};
`;
