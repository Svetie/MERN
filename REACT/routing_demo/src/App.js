import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Info from './components/Info';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h1>Routing Demo</h1>
        <Switch>
          <Route exact path="/">
            <h3>Welcome to the home page</h3>
            {/* anchor tag refreshes the page, that's why we need to use Link */}
            {/* <a href="/about">Go to about page</a>  */}
            <Link to="/about">Go to about page</Link>
            <Link to="/funny">See a joke</Link>
          </Route>
          <Route exact path="/about">
            <h1>This only shows at /about route</h1>
          </Route>
          <Route exact path="/funny">
            <h3>How many programmers does it take to change a light bulb?</h3>
            <p>None. It is a hardware problem</p>
          </Route>
          <Route exact path="/info/:id">
            <Info></Info>
          </Route>
          <Route exact path="/info/:id/:color/:width">
            <Info></Info>
          </Route>
          
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
