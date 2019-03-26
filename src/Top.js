import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  withRouter
} from 'react-router-dom';

import {TransitionGroup, CSSTransition} from 'react-transition-group'

class App extends Component {
  render(){
   return(
     <TransitionGroup>
       <CSSTransition
       in
       className="top-image"
       apper={true}
      >
     <div className="top-image">
       <div className="title-message">profile  site</div>
     </div>
    </CSSTransition>
  </TransitionGroup>
    );
  }
}
export default App;
