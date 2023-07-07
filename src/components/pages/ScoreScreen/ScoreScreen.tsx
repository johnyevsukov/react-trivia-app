import React, { useMemo } from "react";

import { Button } from "../../molecules/Button";
import { VStack } from "../../atoms/VStack";
import { Card } from "../../atoms/Card";
import { Heading } from "../../atoms/Heading";
import { Wrapper } from "../../atoms/Wrapper";
import { FlexBox } from "../../atoms/Box";
import { TextBubble } from "../../atoms/TextBubble";

import { scoreType } from "../../../types/gameTypes";

import * as styles from "./styles";

interface ScoreScreenProps {
  scoreStack: scoreType[];
  totalQuestions: number;
}
export const ScoreScreen: React.FC<ScoreScreenProps> = ({
  scoreStack,
  totalQuestions,
}) => {
  const correctQuestions = useMemo(() => {
    return scoreStack.filter((s: any) => s === "correct").length;
  }, [scoreStack]);

  return (
    <Wrapper>
      <Card>
        <VStack $spacing={24}>
          <Heading>Score</Heading>
          <TextBubble>
            <styles.ScoreText $size="lg" $weight="bold" $align="center">
              You answered {correctQuestions} out of {totalQuestions} questions
              correctly.
            </styles.ScoreText>
          </TextBubble>
          <FlexBox>
            <Button $variant="purple" onClick={() => window.location.reload()}>
              Home
            </Button>
          </FlexBox>
        </VStack>
      </Card>
    </Wrapper>
  );
};
