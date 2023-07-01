import React, { useCallback } from "react";
import { PaddingContainer } from "../../atoms/PaddingContainer";
import { Button } from "../../molecules/Button";
import { gameScreens } from "../Game/Game";
import * as styles from "./styles";

interface HomeScreenProps {
  setGameStack: React.Dispatch<React.SetStateAction<gameScreens[]>>;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ setGameStack }) => {
  const handleStartClick = useCallback(() => {
    setGameStack((state) => [...state, "mainMenu"]);
  }, []);

  return (
    <styles.Wrapper>
      <styles.FloatingBubblesWrapper>
        <styles.FloatingBubble />
        <styles.FloatingBubble />
        <styles.FloatingBubble />
        <styles.FloatingBubble />
        <styles.FloatingBubble />
        <styles.FloatingBubble />
        <styles.FloatingBubble />
        <styles.FloatingBubble />
        <styles.FloatingBubble />
        <styles.FloatingBubble />
      </styles.FloatingBubblesWrapper>
      <PaddingContainer>
        <styles.MainMenuCard>
          <styles.Title>TRIVIA</styles.Title>
          <Button onClick={handleStartClick}>Start</Button>
        </styles.MainMenuCard>
      </PaddingContainer>
    </styles.Wrapper>
  );
};
