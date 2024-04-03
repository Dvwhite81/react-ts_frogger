import { useState } from 'react';
import { LEVELS } from './utils/levels';
import Board from './components/Board';
import './App.css';
import { SCREEN_WIDTH } from './utils/constants';

function App() {
  const [currentLevel, setCurrentLevel] = useState(LEVELS[0]);
  console.log('screen width:', SCREEN_WIDTH);
  return (
    <div className="app">
      <Board currentLevel={currentLevel} />
    </div>
  );
}

export default App;
