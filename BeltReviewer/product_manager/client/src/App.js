import './App.css';
import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import ProductForm from './components/ProductForm';
import AllProducts from './components/AllProducts';
import ShowOne from './components/ShowOne';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <ProductForm></ProductForm>
          <AllProducts></AllProducts>
        </Route>
        <Route exact path="/:id">
          <ShowOne></ShowOne>
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
