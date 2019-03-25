import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Profile from './Profile';
import Skill from './Skill';
import Sns from  './Sns';
import Works from  './Works';
import Top from './Top';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <div>
    <App />
 </div>,

 document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
