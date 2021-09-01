import React from 'react';
import './App.css';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <h1>Dojo Diner</h1>
      <Menu dishName="Momo" price={12.99}>
        <p>Nepali dumpings</p>
        <p>Vegan gluten-free options available</p>
      </Menu>
      <Menu dishName="Maduros" price={12.99}>
        <p>Delicious sweet plaintain</p>
      </Menu>
      <Menu dishName="Buffulo Chicken Pizza" price={12.99}>
        <p>Straight out of NY State</p>
        <p>Contains wheat</p>
      </Menu>
    </div>
  );
}

export default App;
