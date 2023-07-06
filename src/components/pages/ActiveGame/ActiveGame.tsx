import React, { useCallback, useState, useMemo } from "react";
import { PaddingContainer } from "../../atoms/PaddingContainer";
import { Button } from "../../molecules/Button";
import { gameScreens } from "../Game/Game";
import { Question } from "../../organisms/Question/Question";
import * as styles from "./styles";
import { Text } from "../../atoms/Text";
import { TextBubble } from "../../atoms/TextBubble";
import { VStack } from "../../atoms/VStack";
import { Card } from "../../atoms/Card";
import { Wrapper } from "../../atoms/Wrapper";
import { Title } from "../../atoms/Title";
import { FlexBox } from "../../atoms/Box";

interface ActiveGameProps {
  setGameStack: React.Dispatch<React.SetStateAction<gameScreens[]>>;
  gameQuestions: any[];
}
export const ActiveGame: React.FC<ActiveGameProps> = ({
  setGameStack,
  gameQuestions,
}) => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [scoreStack, setScoreStack] = useState([]);
  const [showScoreScreen, setShowScoreScreen] = useState(false);
  const isLastQuestion = useMemo(() => {
    return questionNumber + 1 === gameQuestions.length;
  }, [questionNumber]);
  console.log("score stack ", scoreStack);

  const currentQuestion = useMemo(() => {
    return gameQuestions[questionNumber];
  }, [questionNumber]);

  const correctQuestions = useMemo(() => {
    return scoreStack.filter((s) => s === "correct").length;
  }, [scoreStack]);

  const handleShowScoreScreen = useCallback(() => {
    setShowScoreScreen(true);
  }, []);

  const handleNextQuestion = useCallback(() => {
    setQuestionNumber((state) => state + 1);
  }, []);

  return (
    <Wrapper>
      <Card>
        {!showScoreScreen ? (
          <VStack $spacing={25}>
            <styles.QuestionCount>
              {`${questionNumber + 1}/${gameQuestions.length}`}
            </styles.QuestionCount>
            <Title>Category</Title>
            <Question
              question={currentQuestion}
              isLastQuestion={isLastQuestion}
              handleShowScoreScreen={handleShowScoreScreen}
              handleNextQuestion={handleNextQuestion}
              setScoreStack={setScoreStack}
            />
          </VStack>
        ) : (
          <VStack $spacing={25}>
            <Title>Score</Title>
            <TextBubble>
              <Text $size="lg" $weight="bold" $align="center">
                You answered {correctQuestions} out of {gameQuestions.length}{" "}
                questions correctly.
              </Text>
            </TextBubble>
            <FlexBox>
              <Button
                $variant="purple"
                onClick={() => window.location.reload()}
              >
                Home
              </Button>
            </FlexBox>
          </VStack>
        )}
      </Card>
    </Wrapper>
  );
};
