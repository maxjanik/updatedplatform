import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Roster from './Roster';
import Schedule from './Schedule';
import Teams from './Teams';
import Test from './Test';
import HomePage from './HomePage';
import SignIn from './components/SignIn';

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
class Main extends Component {
  render() {
    return (

  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/roster' component={Roster}/>
      <Route path='/schedule' component={Schedule}/>
      <Route path='/teams' component={Teams}/>
      <Route path='/test' component={Test}/>
      <Route path='/homepage' component={HomePage}/>
      <Route path='/SignIn' component={SignIn}/>
    </Switch>
  </main>
);
}
}

export default Main;
