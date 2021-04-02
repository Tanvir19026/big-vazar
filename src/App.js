
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LogIn from './components/LogIn/LogIn';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Admin from './components/Admin/Admin';
import NoMatch from './components/NoMatch/NoMatch';
import Header from './components/Header/Header';
import CheckOut from './components/CheckOut/CheckOut';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Orders from './components/Orders/Orders';
import ManageProduct from './components/Admin/ManageProduct';




export const UserContext=createContext();
function App() {
  const [loggedInUser,setloggedInUser]=useState({});
  return (
    <UserContext.Provider value={[loggedInUser,setloggedInUser]}>
      <Router>
      <Header></Header>
    
    <Switch>

    <Route path="/home">
            <Home />
          </Route>

          <Route  path="/LogIn">
            <LogIn />
          </Route>

          <PrivateRoute  path="/Admin">
          
            <Admin>
           
            </Admin>
          </PrivateRoute>
           <PrivateRoute  path="/ManageProduct">
        <ManageProduct/>
          </PrivateRoute>
        
         <PrivateRoute path="/Orders/:_id">
           <Orders></Orders>
         </PrivateRoute>


          <PrivateRoute  path="/events/:_id">
            <CheckOut></CheckOut>
          </PrivateRoute>


    <Route exact path="/">
            <Home />
          </Route>

          <Route path="*">
            <NoMatch />
          </Route>

    </Switch>
    </Router>

    
   
   
  </UserContext.Provider>
  );
}

export default App;
