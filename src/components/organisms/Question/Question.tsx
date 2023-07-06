import React, { useState, useCallback } from "react";
import { Text } from "../../atoms/Text";
import * as styles from "./styles";
import { Button } from "../../molecules/Button";
import { VStack } from "../../atoms/VStack";
import { TextBubble } from "../../atoms/TextBubble";

interface QuestionProps {
  question: any;
  handleNextQuestion: any;
  setScoreStack: any;
  isLastQuestion: any;
  handleShowScoreScreen: any;
}

export const Question: React.FC<QuestionProps> = ({
  question,
  handleNextQuestion,
  setScoreStack,
  isLastQuestion,
  handleShowScoreScreen,
}) => {
  const [currentChoice, setCurrentChoice] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleChange = (e: any) => {
    const { value } = e.target;
    setCurrentChoice(value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setScoreStack((state: any) => [
      ...state,
      currentChoice === question.correct ? "correct" : "incorrect",
    ]);
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
        <Button type="button" $variant="purple" onClick={handleShowScoreScreen}>
          See score
        </Button>
      );
    }
  }, [isAnswered]);

  return (
    <VStack $spacing={20}>
      <form onSubmit={handleSubmit}>
        <VStack $spacing={20}>
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
      </form>
      {isAnswered && renderNextButton()}
    </VStack>
  );
};
