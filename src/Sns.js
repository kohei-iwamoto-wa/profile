import React, { Component } from 'react';
import github from './github.png';
import hatena from './hatena.png';
import twitter from './twitter.png';

class App extends Component {
  render(){
   return(
     <div className="profile-page">
       <h3>Related page</h3>
         <div className="work-box">
           <div className="work-box__thumbnail">
             <a href="https://github.com/kohei-iwamoto-wa">
               <img src={github}className="imageSize"></img>
             </a>
             <div className="work-box__description">
            GitHub
             </div>
           </div>
         </div>

         <div className="work-box">
           <div className="work-box__thumbnail">
             <a href="https://koheiprogramming.hatenadiary.com/">
             <img src={hatena}className="imageSize"></img>
             </a>
             <div className="work-box__description">
            　はてなブログ
             </div>
           </div>
         </div>

         <div className="work-box">
           <div className="work-box__thumbnail">
             <a href="https://twitter.com/hSa1iGvSYBItp76">
               <img src={twitter}className="imageSize"></img>
             </a>
             <div className="work-box__description">
              twitter
             </div>
           </div>
         </div>
     </div>
    );
  }
}
export default App;
