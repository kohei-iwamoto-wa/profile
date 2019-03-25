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
             <img src={github}className="imageSize"></img>
             <div className="work-box__description">
            GitHub
             </div>
           </div>
         </div>

         <div className="work-box">
           <div className="work-box__thumbnail">
             <img src={hatena}className="imageSize"></img>
             <div className="work-box__description">
            　　はてなブログ
             </div>
           </div>
         </div>

         <div className="work-box">
           <div className="work-box__thumbnail">
             <img src={twitter}className="imageSize"></img>
             <div className="work-box__description">
              twitter
             </div>
           </div>
         </div>

       <a href="https://twitter.com/hSa1iGvSYBItp76">Twitter</a>
       <a href="https://github.com/kohei-iwamoto-wa">GitHub</a>
       <a href="https://koheiprogramming.hatenadiary.com/">ブログ</a>
     </div>
    );
  }
}
export default App;
