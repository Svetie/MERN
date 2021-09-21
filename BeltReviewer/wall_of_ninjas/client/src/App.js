
import React from 'react';
import './App.css';
import AllNinjas from './components/AllNinjas';
import { useState } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link 
} from "react-router-dom";
import NewNinjaForm from './components/NewNinjaForm';
import OneNinja from './components/OneNinja';
import Edit from './components/Edit';

function App() {

  const [mode, setMode] = useState("white");
  const [fontColor, setFontColor] = useState("black");

  const toggle = () => {
    if(mode === "white"){
      setMode("#2a2a2a");
      setFontColor("white")
    } else {
      setMode("white");
      setFontColor("black")
    }
  }
  return (
    <BrowserRouter>
      <div className="App" style={{backgroundColor: mode, color: fontColor}}>
      <button onClick={toggle} className="btn btn-info">Toggle dark mode</button>
      <h1>Wall of Ninjas</h1>
      {/* <a href="/new" className="btn btn-info">Create a new Ninja</a> */}
      
      <Link to="/" className="btn btn-success ">Home</Link>
      <Switch>
        <Route exact path="/">
          <Link to="/new" className="btn btn-info ml-3">Create a new Ninja</Link>
          <AllNinjas mode={mode} fontColor={fontColor}></AllNinjas> 
        </Route>
        <Route exact path="/new">
          <NewNinjaForm></NewNinjaForm>
        </Route>
        <Route exact path="/ninja/:id">
          <OneNinja></OneNinja>
        </Route>
        <Route exact path="/ninja/edit/:id">
          <Edit></Edit>
        </Route>
      </Switch>
      
      </div>
    </BrowserRouter>
    
  );
}

export default App;
