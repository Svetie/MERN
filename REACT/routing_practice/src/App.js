// routing practice 
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Element from './components/Element';
import Element2 from './components/Element2';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/home">
            <h1>Welcome</h1>
          </Route>
          <Route exact path="/:word">
            <Element></Element>
          </Route>
          <Route exact path="/:word/:color1/:color2">
            <Element2></Element2>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
