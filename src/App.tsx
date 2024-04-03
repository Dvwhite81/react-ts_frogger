import { useState } from 'react';
import { LEVELS } from './utils/levels';
import Board from './components/Board';
import './App.css';

function App() {
  const [currentLevel, setCurrentLevel] = useState(LEVELS[0]);
  return (
    <div className="app">
      <Board currentLevel={currentLevel} />
    </div>
  );
}

export default App;
