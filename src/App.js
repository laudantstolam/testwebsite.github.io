import './App.css';
//image
import tw from "./twittercon.png";// silly bird
import yt from "./button_subscribe.png";

//firebase related
// import startfirebase from './config';
// //import {ref,set,get,update,remove,child} from 'firebase/database';
// import 'firebase/database';
import firebaseConfig from './config';
import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
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
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
        <div className='footer'>
          <a href={twlink}><img src={tw} alt="icon" width={80}></img></a>
          <a href={y2link}><img src={yt} alt="icon" width={80}></img></a>
        </div>
    </div>
  );
}



firebase.initializeApp(firebaseConfig);

function MyComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // 監聽 '/total' 資料節點的數據
    const dbRef = firebase.database().ref('/total');
    dbRef.on('value', snapshot => {
      const val = snapshot.val();
      setData(val);
    });
    // 在組件解除掛載時取消監聽
    return () => dbRef.off();
  }, []);

  return (
    <div>
      <h1>Realtime Database count:</h1>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}

export {App,MyComponent};
