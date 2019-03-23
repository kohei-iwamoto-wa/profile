import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom';

import './App.css';
import Profile from  './Profile';
import Skill from  './Skill';
import Sns from  './Sns';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <header>
          <h2>Kohei Iwamoto</h2>
           <ul>
             <li><Link to="/">PROFILE</Link></li>
             <li><Link to="/">SKILL</Link></li>
             <li><Link to="/">SNS</Link></li>
           </ul>
           <Switch>
            <Route exact path="/" component={Profile} />
            <Route path="/Skill" component={Skill} />
            <Route path="/Sns" component={Sns} />
           </Switch>
        </header>
      </div>
      </Router>
    );
  }
}

export default App;
