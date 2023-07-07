import React from "react";

import { Button } from "../../molecules/Button";
import { VStack } from "../../atoms/VStack";
import { Card } from "../../atoms/Card";
import { Heading } from "../../atoms/Heading";
import { Wrapper } from "../../atoms/Wrapper";
import { FlexBox } from "../../atoms/FlexBox";

import useSound from "use-sound";
import clickSfx from "../../../sounds/click.mp3";

import { gameScreenType } from "../../../types/gameTypes";

interface HomeScreenProps {
  handleNextScreen: (screen: gameScreenType) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ handleNextScreen }) => {
  const [click] = useSound(clickSfx);
  const handleStartClick = () => {
    click();
    handleNextScreen("mainMenuScreen");
  };

  return (
    <Wrapper>
      <Card>
        <VStack $spacing={32} $spacingMobile={24}>
          <Heading>TRIVIA</Heading>
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
