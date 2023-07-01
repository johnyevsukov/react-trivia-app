import React from "react";
import { PaddingContainer } from "../../atoms/PaddingContainer";
import { Text } from "../../atoms/Text";
import * as styles from "./styles";

export const Game = () => {
  return (
    <styles.Wrapper>
      <PaddingContainer>
        <styles.MainMenuCard>
          <Text $size="xl" $weight="bold">
            TRIVIA
          </Text>
        </styles.MainMenuCard>
      </PaddingContainer>
    </styles.Wrapper>
  );
};
