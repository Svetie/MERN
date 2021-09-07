import React, {useState} from 'react';
import './App.css';
import Coins from './components/Coins';
import CoinsWithAxios from './components/CoinsWithAxios';

function App() {

  return (
    <div className="App">
      <h1>Top Cryptos</h1>
      {/* <Coins></Coins> */}
      <CoinsWithAxios></CoinsWithAxios>
    </div>
  );
}

export default App;
