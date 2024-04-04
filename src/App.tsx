import { useState } from 'react';

import { LEVELS } from './utils/levels';

import Board from './components/Board';
import './App.css';

function App() {
  const [currentLevel, setCurrentLevel] = useState(LEVELS[0]);
  const [isStarted, setIsStarted] = useState(false);
  const [hasBeenPaused, setHasBeenPaused] = useState(false);

  const { id, level } = currentLevel;
  const speed = 100 * (id / 10);

  const start = () => {
    setIsStarted(true);
  };

  const pause = () => {
    setIsStarted(false);
    setHasBeenPaused(true);
  };

  return (
    <div className="app">
      <Board
        currentLevel={currentLevel}
        isStarted={isStarted}
        hasBeenPaused={hasBeenPaused}
      />
      {isStarted ? (
        <button type="button" className="start-btn" onClick={pause}>
          Pause
        </button>
      ) : (
        <button type="button" className="start-btn" onClick={start}>
          Start
        </button>
      )}
    </div>
  );
}

export default App;
