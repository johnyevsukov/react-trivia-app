import { useCallback, useState } from "react";

import { HomeScreen } from "../HomeScreen/HomeScreen";
import { MainMenu } from "../MainMenu/MainMenu";
import { ActiveGame } from "../ActiveGame/ActiveGame";
import { ScoreScreen } from "../ScoreScreen/ScoreScreen";

import { gameScreenType } from "../../../types/gameTypes";
import { scoreType } from "../../../types/gameTypes";
import { apiQuestionType } from "../../../types/gameTypes";
import { gameQuestionType } from "../../../types/gameTypes";

export const Game = () => {
  const [gameScreenStack, setGameScreenStack] = useState<gameScreenType[]>([
    "homeScreen",
  ]);
  const [gameQuestions, setGameQuestions] = useState<gameQuestionType[]>([]);
  const [scoreStack, setScoreStack] = useState<scoreType[]>([]);

  const initializeGameQuestions = (questions: apiQuestionType[]) => {
    const restructuredQuestions = questions.map((question: any) => {
      const choices = question.incorrect_answers;
      choices.push(question.correct_answer);
      const shuffledChoices = choices.sort(() => Math.random() - 0.5);

      return {
        question: question.question,
        correct: question.correct_answer,
        choices: shuffledChoices,
      };
    });

    setGameQuestions(restructuredQuestions);
  };

  const handleNextScreen = useCallback((screen: gameScreenType) => {
    setGameScreenStack((s) => [...s, screen]);
  }, []);

  const handleAddScore = useCallback((score: scoreType) => {
    setScoreStack((s) => [...s, score]);
  }, []);

  const renderGameScreen = (gameStack: gameScreenType[]) => {
    const currentStep = gameStack[gameStack.length - 1];

    if (currentStep === "homeScreen") {
      return <HomeScreen handleNextScreen={handleNextScreen} />;
    } else if (currentStep === "mainMenuScreen") {
      return (
        <MainMenu
          handleNextScreen={handleNextScreen}
          initializeGameQuestions={initializeGameQuestions}
        />
      );
    } else if (currentStep === "activeGameScreen" && gameQuestions) {
      return (
        <ActiveGame
          handleNextScreen={handleNextScreen}
          gameQuestions={gameQuestions}
          handleAddScore={handleAddScore}
        />
      );
    } else if (currentStep === "scoreScreen") {
      return (
        <ScoreScreen
          scoreStack={scoreStack}
          totalQuestions={gameQuestions.length}
        />
      );
    } else return;
  };

  return <>{renderGameScreen(gameScreenStack)}</>;
};
