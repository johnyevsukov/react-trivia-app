import React from "react";

import { Button } from "../../molecules/Button";
import { VStack } from "../../atoms/VStack";
import { Card } from "../../atoms/Card";
import { Heading } from "../../atoms/Heading";
import { Wrapper } from "../../atoms/Wrapper";
import { FlexBox } from "../../atoms/FlexBox";

import { GithubIcon } from "../../atoms/icons/GithubIcon";

import useSound from "use-sound";
import clickSfx from "../../../sounds/click.mp3";

import { gameScreenType } from "../../../types/gameTypes";

import * as styles from "./styles";

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
        <styles.HiddenOverflowContainer>
          <styles.WebsiteBanner>
            <styles.TextLink
              as="a"
              href="https://www.john.engineering/"
              target="_blank"
              rel="noopener noreferrer"
            >
              My Site
            </styles.TextLink>
          </styles.WebsiteBanner>
        </styles.HiddenOverflowContainer>
        <VStack $spacing={32} $spacingMobile={24}>
          <Heading>TRIVIA</Heading>
          <FlexBox>
            <Button onClick={handleStartClick} $variant="purple">
              Start
            </Button>
          </FlexBox>
        </VStack>
        <styles.GithubLink
          href="https://github.com/johnyevsukov/react-trivia-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon />
        </styles.GithubLink>
      </Card>
    </Wrapper>
  );
};
