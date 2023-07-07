import React, { useCallback, useState, useMemo } from "react";

import { VStack } from "../../atoms/VStack";
import { Card } from "../../atoms/Card";
import { Heading } from "../../atoms/Heading";
import { Wrapper } from "../../atoms/Wrapper";
import { Question } from "../../organisms/Question/Question";

import { gameScreenType } from "../../../types/gameTypes";
import { scoreType } from "../../../types/gameTypes";
import { gameQuestionType } from "../../../types/gameTypes";
import { categoryLabelType } from "../../../types/gameTypes";
import { difficultyValueType } from "../../../types/gameTypes";

import * as styles from "./styles";

interface ActiveGameProps {
  handleNextScreen: (screen: gameScreenType) => void;
  gameQuestions: gameQuestionType[];
  handleAddScore: (score: scoreType) => void;
  categoryChoice: categoryLabelType;
  difficultyChoice: difficultyValueType;
}
export const ActiveGame: React.FC<ActiveGameProps> = ({
  handleNextScreen,
  gameQuestions,
  handleAddScore,
  categoryChoice,
  difficultyChoice,
}) => {
  const [questionNumber, setQuestionNumber] = useState(0);

  const isLastQuestion = useMemo(() => {
    return questionNumber + 1 === gameQuestions.length;
  }, [questionNumber]);

  const currentQuestion = useMemo(() => {
    return gameQuestions[questionNumber];
  }, [questionNumber]);

  const handleNextQuestion = useCallback(() => {
    setQuestionNumber((s) => s + 1);
  }, []);

  const setScoreScreen = useCallback(() => {
    handleNextScreen("scoreScreen");
  }, []);

  return (
    <Wrapper>
      <Card>
        <VStack $spacing={25}>
          <styles.HiddenOverflowContainer>
            <styles.DifficultyTextWrapper $difficulty={difficultyChoice}>
              <styles.DifficultyText>{difficultyChoice}</styles.DifficultyText>
            </styles.DifficultyTextWrapper>
          </styles.HiddenOverflowContainer>
          <styles.QuestionCountTextWrapper>
            <styles.QuestionCountText>
              {`${questionNumber + 1}/${gameQuestions.length}`}
            </styles.QuestionCountText>
          </styles.QuestionCountTextWrapper>
          <Heading>{categoryChoice}</Heading>
          <Question
            question={currentQuestion}
            isLastQuestion={isLastQuestion}
            handleNextQuestion={handleNextQuestion}
            handleAddScore={handleAddScore}
            setScoreScreen={setScoreScreen}
          />
        </VStack>
      </Card>
    </Wrapper>
  );
};
