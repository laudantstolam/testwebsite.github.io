import './App.css';
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
      
      <div className="title">
        <h4>what does Shu say</h4>
      </div>
      <div className='content'>
        <p>123,456,789</p>
         {MyComponent}
      </div>
     
     
      
        <div className='footer'>
          <a href={twlink}><img src={tw} alt="icon" width={80}></img></a>
          <a href={y2link}><img src={yt} alt="icon" width={80}></img></a>
        </div>
    </div>
  );
}

export default App;
