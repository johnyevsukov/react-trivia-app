import styled from "styled-components";

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.7);
  padding: 32px;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  z-index: 1;
  width: 100%;
  max-width: 450px;

  @media (min-width: 768px) {
    padding: 64px;
    min-width: 410px;
  }
`;
