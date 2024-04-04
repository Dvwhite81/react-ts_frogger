import { useState } from 'react';
import { LEVELS } from './utils/levels';
import Board from './components/Board';
import './App.css';

function App() {
  const [currentLevel, setCurrentLevel] = useState(LEVELS[0]);
  const [isStarted, setIsStarted] = useState(false);

  const toggleStart = () => {
    setIsStarted(!isStarted);
  };

  const btnText = isStarted ? 'Stop' : 'Start';

  return (
    <div className="app">
      <Board currentLevel={currentLevel} isStarted={isStarted} />
      <button type="button" className="start-btn" onClick={toggleStart}>
        {btnText}
      </button>
    </div>
  );
}

export default App;
