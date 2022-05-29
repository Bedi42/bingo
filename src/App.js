import React, { useState } from 'react';
import Board from './Board';
import './scss/main.scss';

const App = () => {
  const [counter, setCounter] = useState(0);

  return <Board />;
};

export default App;
