import React from 'react';
import { GlobalStorage } from './GlobalContext';
import Produto from './Produto';

const App = () => {
  return (
    <GlobalStorage>
      <Produto />
    </GlobalStorage>
  );
};

export default App;
