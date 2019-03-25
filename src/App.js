import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom';

import './App.css';
import Top from  './Top';
import Profile from  './Profile';
import Skill from  './Skill';
import Sns from  './Sns';
import Works from  './Works';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <header>
          <h2>Kohei Iwamoto</h2>
           <ul>
             <li><Link to="/">TOP</Link></li>
             <li><Link to="/Profile">PROFILE</Link></li>
             <li><Link to="/Skill">SKILL</Link></li>
             <li><Link to="/Sns">Relate page</Link></li>
             <li><Link to="/Works/">Works</Link></li>
           </ul>
      </header>
           <Switch>
            <Route exact path="/" component={Top} />
            <Route exact path="/Profile" component={Profile} />
            <Route path="/Skill" component={Skill} />
            <Route path="/Sns" component={Sns} />
            <Route path="/Works" component={Works} />
           </Switch>

      </div>
      </Router>
    );
  }
}

export default App;
