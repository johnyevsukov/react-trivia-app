import styled from "styled-components";
import { Text } from "../../atoms/Text";
import { colors } from "../../../colors";
import { fontSizeCss } from "../../atoms/Text";

export const GithubLink = styled.a`
  position: absolute;
  cursor: pointer;
  right: 15px;
  bottom: 15px;
  width: 40px;
  height: 40px;
  transition: all 0.1s ease-in-out;
  border-radius: 50%;

  &:hover,
  &:focus {
    transform: rotate(20deg);
    box-shadow: rgba(0, 0, 0, 0.5) 1.95px 1.95px 2.6px;
  }
`;

export const WebsiteBanner = styled.div``;

export const TextLink = styled(Text).attrs({
  $weight: "bold",
  $size: "sm",
  $align: "center",
})`
  text-decoration: none;
  cursor: pointer;

  &:hover,
  &:focus {
    text-decoration: underline;
  }

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

export const DifficultyTextWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  top: 22px;
  left: -67px;
  padding: 2px;
  border-radius: 10px;
  transform: rotate(-45deg);
  width: 200px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  background: ${colors.purple2};

  @media (min-width: 768px) {
    top: 25px;
    left: -57px;
    padding: 5px;
  }
`;

export const LinkIconWrapper = styled.div`
  width: 40px;
  height: 40px;
`;
