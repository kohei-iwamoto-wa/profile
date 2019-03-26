import React, { Component } from 'react';
import book from './book.png';
import portfolio from './portfolio.png';

class App extends Component {
  render(){

   return(
     <div className="profile-page">
       <h3>Works</h3>
       <div className="work-box">
         <div className="work-box__thumbnail">
           <a href="https://kohei-iwamoto-wa.github.io/BookSearchApp/">
             <img src={book}className="imageSize"></img>
           </a>
           <div className="work-box__description">
             javascriptとGoogleBooksApiを用いて作成しました。
           </div>
         </div>
       </div>

       <div className="work-box">
         <div className="work-box__thumbnail">
           <img src={portfolio}className="imageSize"></img>
           <div className="work-box__description">
             React.jsで作成したポートフォリオサイト。シングルアプリケーションになってます。(本サイト)
           </div>
         </div>
       </div>
     </div>
    );
  }
}
export default App;
