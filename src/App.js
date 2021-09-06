import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import NotFound from './Components/NotFound/NotFound';
import ReviewOrder from './Components/ReviewOrder/ReviewOrder';
import Inventory from './Components/Inventory/Inventory';
import ProductDetail from './ProductDetail/ProductDetail';
import Shipment from './Components/Shipment/Shipment';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';


export const UserContext = createContext();



function App() {

const [loggedInUser, setLoggedInUser ] = useState({});


  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]} className="App">
    <h1>Name: {loggedInUser.email} </h1>
   
 
    <Router>
    <Header></Header>
        <Switch>
          <Route path="/">
            <Shop></Shop>
          </Route>
          <Route path="/review">
         <ReviewOrder></ReviewOrder>
          </Route>
          
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/inventory">
          <Inventory></Inventory>
          </PrivateRoute>
          <PrivateRoute path="/shipment">
            <Shipment></Shipment>
          </PrivateRoute>
          <Route path="/product/:key">
<ProductDetail></ProductDetail>

          </Route>

          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
            
          </Route>
        </Switch>
  
    </Router>
    </UserContext.Provider>
  );
}

export default App;
