import React from "react";
import logo from "./logo.svg";
import { Game } from "./components/pages/Game/Game";
import * as styles from "./styles";

function App() {
  return (
    <styles.BackgroundWrapper>
      <Game />
    </styles.BackgroundWrapper>
  );
}

export default App;
