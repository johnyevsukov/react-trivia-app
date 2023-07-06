import React, { useState } from "react";
import { HomeScreen } from "../HomeScreen/HomeScreen";
import { MainMenu } from "../MainMenu/MainMenu";
import { ActiveGame } from "../ActiveGame/ActiveGame";

export type gameScreens = "home" | "mainMenu" | "activeGame" | "score";

export const Game = () => {
  const [score, setScore] = useState([]);
  const [category, setCategory] = useState("");
  const [gameStack, setGameStack] = useState<gameScreens[]>(["home"]);
  const [gameQuestions, setGameQuestions] = useState([]);

  const shuffleArray = (array: any) => {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  };

  const initializeGameQuestions = (questions: any) => {
    const reorganizedQuestions = questions.map((question: any, i: any) => {
      const choices = question.incorrect_answers;
      choices.push(question.correct_answer);
      shuffleArray(choices);
      return {
        id: i,
        question: question.question,
        correct: question.correct_answer,
        choices: choices,
      };
    });
    setGameQuestions(reorganizedQuestions);
  };

  const renderGameScreen = (
    gameStack: gameScreens[],
    setGameStack: React.Dispatch<React.SetStateAction<gameScreens[]>>
  ) => {
    const currentStep = gameStack[gameStack.length - 1];
    if (currentStep === "home") {
      return <HomeScreen setGameStack={setGameStack} />;
    } else if (currentStep === "mainMenu") {
      return (
        <MainMenu
          setGameStack={setGameStack}
          initializeGameQuestions={initializeGameQuestions}
        />
      );
    } else if (currentStep === "activeGame" && gameQuestions) {
      return (
        <ActiveGame setGameStack={setGameStack} gameQuestions={gameQuestions} />
      );
    } else return;
  };

  return <>{renderGameScreen(gameStack, setGameStack)}</>;
};
