import React, { Component } from 'react';

class App extends Component {
  render(){
   return(
     <div className="profile-page">
       <div className="skill-page">
         <h3>SKILL</h3>
         <h3>Languages</h3>
           <div className="languages-box">
             <i class="fab fa-html5"></i>
             <p>HTML&HAML</p>
             <i class="fab fa-css3-alt"></i>
             <p>CSS&SCSS</p>
             <i class="fab fa-js-square"></i>
             <p>Javascript</p>
          </div>
         <h3>Framework</h3>
           <div className="framework-box">
             <i class="fab fa-react"></i>
             <p>React.js</p>
          </div>
          <h3>Development environment</h3>
            <div className="environment-box">
              <i class="fab fa-github"></i>
              <p>GitHub</p>
              <i class="fas fa-atom"></i>
              <p>Atom</p>
            </div>
           </div>
         </div>
    );
  }
}
export default App;
