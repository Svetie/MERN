import './App.css';
import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link 
} from "react-router-dom";
import ProductForm from './components/ProductForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path="/">

        </Route>
        <Route exact path="/new">
          <Link to="/" className="btn btn-success ">Home</Link>
          <ProductForm></ProductForm>
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
