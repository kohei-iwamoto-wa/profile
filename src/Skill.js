import React, { Component } from 'react';

class App extends Component {
  render(){
   return(
     <div className="profile-page">
       <div className="skill-page">
         <h3>SKILL</h3>
         <h4>言語</h4>
         <i class="fab fa-html5"></i>
         <p>HTML</p>
         <i class="fab fa-css3-alt"></i>
         <p>CSS&SCSS</p>
         <i class="fab fa-js-square"></i>
         <p>Javascript</p>
         <h3>フレームワーク</h3>
         <p>Ruby</p>
         <i class="fab fa-js-square"></i>
         <p>Ruby On Rales</p>
         <i class="fab fa-react"></i>
         <p>React.js</p>
         <h3>開発環境</h3>
         <i class="fab fa-github"></i>
         <p>GitHub</p>
         <i class="fas fa-atom"></i>
         <p>Atom</p>
         </div>
       </div>
    );
  }
}
export default App;
