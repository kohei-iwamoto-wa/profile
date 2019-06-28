import React, { Component } from 'react';

class App extends Component {
  render(){
   return(
     <div className="profile-page">
       <h3>profile</h3>
       <div className="profile-content">

       </div>
       <p className="my-name">name: Kohei Iwamoto</p>
       <p className="my-age">age: 28</p>
       <div className="profile">
         <p>フロントエンジニアを目指して勉強中。
         現在React.js学習中。</p>

       <div className="carrier">
         <p>2014年大学卒業　専攻は福祉</p>
         <p>2014年〜病院の事務員として働く</p>
         <p>2019年2月退職</p>
         <p>2019年4月よりWEB制作会社で勤務</p>
         <p>同年7月2日退職</p>
       </div>
      <div className="seikaku">
        <h3>Personality</h3>
        <p>やりたいことは基本的にやってしまいます。</p>
      </div>

      <div className="my-hobby">
        <h3>hobby</h3>
        <p>ギターを3年くらいやっています。</p>
        <p>学生時代は琵琶湖でブラックバス釣るのが好きでした。</p>
      </div>
    </div>
  </div>
    );
  }
}
export default App;
