import React from 'react';

import './global.css';
/**
 * Não há necessidade de indicar o 'index.js', pois por não indicarmos
 * nada, ele sempre procura pelo arquivo padrão (index.js)
 */
import Routes from './routes';

function App() {  
  return (
    <Routes />
  );
}

export default App;
