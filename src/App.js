import './App.css';
import HelmetExport from 'react-helmet';
//image
import tw from "./twittercon.png";// silly bird
import yt from "./button_subscribe.png";

//firebase related
// import startfirebase from './config';
// //import {ref,set,get,update,remove,child} from 'firebase/database';
// import 'firebase/database';
import MyComponent from './firebaseconfig';
import React from 'react';
//import firebase from 'firebase/compat/app';
import 'firebase/database';

function App() {
  const twlink = "https://twitter.com/shu_yamino";
  const y2link = "https://www.youtube.com/@ShuYamino";
  return (
    <div className="App">
      <div>
      <HelmetExport>
      <link rel="icon" href="%PUBLIC_URL%/yaminerd.ico" />
      <title>What-does-shu-say</title>
      </HelmetExport>
      </div>
      
      <div className='content'>
        <p>123,456,789</p>
      </div>
      {/* <MyComponent /> */}
     
      
        <footer>
          <a href={twlink}><img src={tw} alt="icon" width={90}></img></a>
          <a href={y2link}><img src={yt} alt="icon" width={90}></img></a>
        </footer>
    </div>
  );
}

export default App;
