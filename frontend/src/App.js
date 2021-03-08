import React from 'react';
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from './components/Login';
import MovieDetails from './components/MovieDetails/MovieDetails';
import './App.css';
import { Route, Switch, useHistory } from "react-router-dom";
import MovieList from './components/MovieList';
import { login } from './redux/actions';
import { connect } from 'react-redux';

function App({ login }) {

  const token = localStorage.getItem('token');
  const history = useHistory();
  
  console.log(history);
  if (token) {
    login(token);
    history.push("/movielist");
  };


  return (
  
    <Switch>

    <Route path="/" exact>
      <div className="App">
        <Home />
      </div>
    </Route>
    <Route path="/signup" component={Signup} exact />
    <Route path="/login" component={Login} exact />
    <Route path="/movielist" component={MovieList} exact />
    <Route path="/moviedetails/:id" component={MovieDetails} exact />
    </Switch>
  
  );
}

export default connect(null, {login})(App);