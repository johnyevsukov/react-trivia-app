import { Game } from "./components/pages/Game/Game";
import * as styles from "./styles";

function App() {
  return (
    <styles.BackgroundWrapper>
      <styles.FloatingBubblesWrapper>
        <styles.FloatingBubble />
        <styles.FloatingBubble />
        <styles.FloatingBubble />
        <styles.FloatingBubble />
        <styles.FloatingBubble />
        <styles.FloatingBubble />
        <styles.FloatingBubble />
        <styles.FloatingBubble />
        <styles.FloatingBubble />
        <styles.FloatingBubble />
      </styles.FloatingBubblesWrapper>
      <Game />
    </styles.BackgroundWrapper>
  );
}

export default App;
