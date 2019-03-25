import React, { Component } from 'react';
import image from './book-works.png';

class App extends Component {
  render(){
   return(
     <div className="main-content">
       <h3>Works</h3>
       <a href="https://kohei-iwamoto-wa.github.io/BookSearchApp/">書籍検索</a>
       <div className="work-box">
         <div className="work-box__thumbnail">
           <img src="{image}">jjj</img>
           <div className="work-box__description">
             javascriptとGoogleBooksApiを用いて作成しました。
           </div>
         </div>
       </div>
     </div>
    );
  }
}
export default App;
