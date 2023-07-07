import styled from "styled-components";

export const VStack = styled.div<{
  $spacing: number;
  $spacingMobile?: number;
  $width?: string;
  $marginTop?: number;
}>`
  display: flex;
  flex-direction: column;
  width: ${({ $width }) => ($width ? $width : "100%")};
  margin-top: ${({ $marginTop }) => ($marginTop ? `${$marginTop}px` : null)};

  > * {
    margin-bottom: ${({ $spacing, $spacingMobile }) =>
      $spacingMobile ? `${$spacingMobile}px` : `${$spacing}px`};
  }

  > *:last-child {
    margin-bottom: 0;
  }

  @media (min-width: 768px) {
    > * {
      margin-bottom: ${({ $spacing }) => `${$spacing}px`};
    }
  }
`;
