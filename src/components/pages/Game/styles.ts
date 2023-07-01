import styled from "styled-components";
import { colors } from "../../../colors";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const MainMenuCard = styled.div`
  background: ${colors.offWhite};
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;
