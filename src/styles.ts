import styled, { keyframes } from "styled-components";
import { colors } from "./colors";
import { Text } from "./components/atoms/Text";

export const BackgroundWrapper = styled.div`
  background: ${colors.purple3};
  height: 100svh;
  width: 100%;
`;

const animate = keyframes`
  0% {
      transform: translateY(0) rotate(0deg);
      opacity: 1;
      border-radius: 0;
  }

  100% {
      transform: translateY(-1000px) rotate(720deg);
      opacity: 0;
      border-radius: 50%;
  }`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const FloatingBubblesWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;

  :nth-child(1) {
    left: 25%;
    width: 80px;
    height: 80px;
    background: rgba(44, 255, 93, 0.3);
    animation-delay: 0s;
  }
  :nth-child(2) {
    left: 10%;
    width: 20px;
    height: 20px;
    animation-delay: 2s;
    background: rgba(44, 255, 93, 0.3);
    animation-duration: 12s;
  }
  :nth-child(3) {
    left: 70%;
    width: 20px;
    height: 20px;
    background: rgba(44, 255, 93, 0.3);
    animation-delay: 4s;
  }
  :nth-child(4) {
    left: 40%;
    width: 60px;
    height: 60px;
    background: rgba(255, 76, 76, 0.3);
    animation-delay: 0s;
    animation-duration: 18s;
  }
  :nth-child(5) {
    left: 65%;
    width: 20px;
    height: 20px;
    background: rgba(44, 255, 93, 0.3);
    animation-delay: 0s;
  }
  :nth-child(6) {
    left: 75%;
    width: 110px;
    height: 110px;
    background: rgba(44, 255, 93, 0.3);
    animation-delay: 3s;
  }
  :nth-child(7) {
    left: 35%;
    width: 150px;
    height: 150px;
    background: rgba(255, 76, 76, 0.3);
    animation-delay: 7s;
  }
  :nth-child(8) {
    left: 50%;
    width: 25px;
    height: 25px;
    background: rgba(255, 76, 76, 0.3);
    animation-delay: 15s;
    animation-duration: 45s;
  }
  :nth-child(9) {
    left: 20%;
    width: 15px;
    height: 15px;
    animation-delay: 2s;
    background: rgba(44, 255, 93, 0.3);
    animation-duration: 25s;
  }
  :nth-child(10) {
    left: 85%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    background: rgba(255, 76, 76, 0.3);
    animation-duration: 11s;
  }
`;

export const FloatingBubble = styled.div`
  position: absolute;
  animation: ${animate} 10s linear infinite;
  bottom: -150px;
  z-index: 0;
`;

export const MainMenuCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.7);
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
  margin-bottom: 32px;
`;
