import React from 'react';
import '../styles/App.css';
import BoardContainer from './BoardContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Omok game
        </p>
      </header>
      <BoardContainer />
    </div>
  );
}

export default App;
