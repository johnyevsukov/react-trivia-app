import React, { useCallback } from "react";
import { PaddingContainer } from "../../atoms/PaddingContainer";
import { Button } from "../../molecules/Button";
import { gameScreens } from "../Game/Game";
import { Card } from "../../atoms/Card";
import { Title } from "../../atoms/Title";
import { Wrapper } from "../../atoms/Wrapper";
import { VStack } from "../../atoms/VStack";
import { FlexBox } from "../../atoms/Box";

interface HomeScreenProps {
  setGameStack: React.Dispatch<React.SetStateAction<gameScreens[]>>;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ setGameStack }) => {
  const handleStartClick = useCallback(() => {
    setGameStack((state) => [...state, "mainMenu"]);
  }, []);

  return (
    <Wrapper>
      <Card>
        <VStack $spacing={32} $spacingMobile={24}>
          <Title>TRIVIA</Title>
          <FlexBox>
            <Button onClick={handleStartClick} $variant="purple">
              Start
            </Button>
          </FlexBox>
        </VStack>
      </Card>
    </Wrapper>
  );
};
