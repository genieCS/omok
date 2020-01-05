import React, { useState } from 'react';
import '../styles/App.css';
import BoardContainer from './BoardContainer';

function App() {
  const [title, setTitle] = useState("Omok game");

  return (
    <div className="App">
      <header className="App-header">
        <p>
          { title }
        </p>
      </header>
      <BoardContainer onWinner={ (title) => setTitle(title) }/>
    </div>
  );
}

export default App;
