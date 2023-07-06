import React, { useState, useCallback } from "react";

import { Button } from "../../molecules/Button";
import { VStack } from "../../atoms/VStack";
import { TextBubble } from "../../atoms/TextBubble";

import useSound from "use-sound";
import correctSfx from "../../../sounds/correct.mp3";
import incorrectSfx from "../../../sounds/incorrect.mp3";

import { scoreType } from "../../../types/gameTypes";
import { gameQuestionType } from "../../../types/gameTypes";

import * as styles from "./styles";

interface QuestionProps {
  question: gameQuestionType;
  handleNextQuestion: () => void;
  handleAddScore: (score: scoreType) => void;
  isLastQuestion: boolean;
  setScoreScreen: () => void;
}

export const Question: React.FC<QuestionProps> = ({
  question,
  handleNextQuestion,
  handleAddScore,
  isLastQuestion,
  setScoreScreen,
}) => {
  const [currentChoice, setCurrentChoice] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [correct] = useSound(correctSfx);
  const [incorrect] = useSound(incorrectSfx);

  const handleChange = (e: any) => {
    const { value } = e.target;
    setCurrentChoice(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    currentChoice === question.correct ? correct() : incorrect();
    handleAddScore(
      currentChoice === question.correct ? "correct" : "incorrect"
    );
    setIsAnswered(true);
  };

  const nextQuestion = (e: any) => {
    e.preventDefault();
    handleNextQuestion();
    setCurrentChoice(null);
    setIsAnswered(false);
  };

  const renderNextButton = useCallback(() => {
    if (!isLastQuestion) {
      return (
        <Button type="button" $variant="purple" onClick={nextQuestion}>
          Next
        </Button>
      );
    } else {
      return (
        <Button type="button" $variant="purple" onClick={setScoreScreen}>
          See score
        </Button>
      );
    }
  }, [isAnswered]);

  return (
    <VStack $spacing={20}>
      <VStack $spacing={20} as="form" onSubmit={handleSubmit}>
        <VStack $spacing={20}>
          <TextBubble>
            <styles.QuestionText
              dangerouslySetInnerHTML={{ __html: question.question }}
            />
          </TextBubble>
          <VStack $spacing={10}>
            {question.choices.map((c: any) => {
              return (
                <styles.ChoiceWrapper
                  $isAnswered={isAnswered}
                  $correct={c === question.correct}
                >
                  <styles.RadioInput
                    $isAnswered={isAnswered}
                    $correct={c === question.correct}
                    type="radio"
                    name="question"
                    onChange={handleChange}
                    checked={c === currentChoice}
                    value={c}
                    disabled={isAnswered}
                  />
                  <styles.RadioInputLabel
                    dangerouslySetInnerHTML={{ __html: c }}
                  />
                  <styles.SelectCircle />
                </styles.ChoiceWrapper>
              );
            })}
          </VStack>
        </VStack>
        {!isAnswered && (
          <Button type="submit" $variant="purple" disabled={!currentChoice}>
            Submit
          </Button>
        )}
      </VStack>
      {isAnswered && renderNextButton()}
    </VStack>
  );
};
