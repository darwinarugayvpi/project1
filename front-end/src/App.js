import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import AddPage from './pages/add-page/AddPage';
import EditPage from './pages/edit-page/EditPage';
import HomePage from './pages/home-page/HomePage';
import NavBar from '../src/components/nav-bar/NavBar';

class App extends Component {
  render() {
    // console.log(this.state.employees);
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/add" component={AddPage} />
          <Route exact path="/edit/:userID" component={EditPage} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
