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
import EditProduct from './components/EditProduct';

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
        <Route exact path="/:id/edit">
          <EditProduct></EditProduct>
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
