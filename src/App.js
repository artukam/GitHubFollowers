import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import NavigationBar from './NavigationBar.js';
import MainPage from './MainPage.js';
import UserPage from './UserPage.js';

const App = props => {
  return (
    <div className="container-fluid">
      <Route exact path="/search" component={NavigationBar}/>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/search" component={UserPage} />
        <Route component={MainPage} />
      </Switch>
    </div>
  );
}

export default App;
