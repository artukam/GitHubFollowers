import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import NavigationBar from './NavigationBar.js';
import MainPage from './MainPage.js';
import UserPage from './UserPage.js';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Route exact path="/search" component={NavigationBar}/>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/search" component={UserPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
