import React, { useState } from "react";
import { HomeScreen } from "../HomeScreen/HomeScreen";
import { MainMenu } from "../MainMenu/MainMenu";

export type gameScreens = "home" | "mainMenu" | "activeGame" | "score";

export const Game = () => {
  const [gameStack, setGameStack] = useState<gameScreens[]>(["home"]);
  const renderGameScreen = (
    gameStack: gameScreens[],
    setGameStack: React.Dispatch<React.SetStateAction<gameScreens[]>>
  ) => {
    const currentStep = gameStack[gameStack.length - 1];
    if (currentStep === "home") {
      return <HomeScreen setGameStack={setGameStack} />;
    } else if (currentStep === "mainMenu") {
      return <MainMenu setGameStack={setGameStack} />;
    } else return;
  };

  return <>{renderGameScreen(gameStack, setGameStack)}</>;
};
