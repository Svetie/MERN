import './App.css';
import React from 'react';
import Form from './components/Form'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Display from './components/Display';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Form></Form>
      
      <Switch>
        <Route exact path = "/:category/:id">
          <Display></Display>
        </Route>
      </Switch>
    
    </div>
    </BrowserRouter>
    
);
}

export default App;
