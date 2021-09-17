import React from 'react';
import './App.css';
import { useState } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link 
} from "react-router-dom";
import AllAuthors from './components/AllAuthors';
import Create from './components/Create';
import Edit from './components/Edit';

function App() {
  return (
    <BrowserRouter>
    <div className="App container">
      <h1>Favorite Authors</h1>
      <Switch>
        <Route exact path="/">
          <AllAuthors></AllAuthors>
        </Route>
        <Route exact path="/new">
          <Create></Create>
        </Route>
        <Route exact path="/edit/:id">
          <Edit></Edit>
        </Route>
      </Switch>



    </div>    
    </BrowserRouter>

  );
}

export default App;
