import { useCallback, useState } from "react";

import { HomeScreen } from "../HomeScreen/HomeScreen";
import { MainMenu } from "../MainMenu/MainMenu";
import { ActiveGame } from "../ActiveGame/ActiveGame";
import { ScoreScreen } from "../ScoreScreen/ScoreScreen";

import { gameScreenType } from "../../../types/gameTypes";
import { scoreType } from "../../../types/gameTypes";
import { apiQuestionType } from "../../../types/gameTypes";
import { gameQuestionType } from "../../../types/gameTypes";
import { categoryLabelType } from "../../../types/gameTypes";
import { difficultyValueType } from "../../../types/gameTypes";

export const Game = () => {
  const [gameScreenStack, setGameScreenStack] = useState<gameScreenType[]>([
    "homeScreen",
  ]);
  const [gameQuestions, setGameQuestions] = useState<gameQuestionType[]>([]);
  const [categoryChoice, setCategoryChoice] = useState<categoryLabelType>();
  const [difficultyChoice, setDifficultyChoice] =
    useState<difficultyValueType>();
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
          setCategoryChoice={setCategoryChoice}
          setDifficultyChoice={setDifficultyChoice}
        />
      );
    } else if (
      currentStep === "activeGameScreen" &&
      gameQuestions &&
      categoryChoice &&
      difficultyChoice
    ) {
      return (
        <ActiveGame
          handleNextScreen={handleNextScreen}
          gameQuestions={gameQuestions}
          handleAddScore={handleAddScore}
          categoryChoice={categoryChoice}
          difficultyChoice={difficultyChoice}
        />
      );
    } else if (
      currentStep === "scoreScreen" &&
      categoryChoice &&
      difficultyChoice
    ) {
      return (
        <ScoreScreen
          scoreStack={scoreStack}
          totalQuestions={gameQuestions.length}
          categoryChoice={categoryChoice}
          difficultyChoice={difficultyChoice}
        />
      );
    } else return;
  };

  return <>{renderGameScreen(gameScreenStack)}</>;
};
