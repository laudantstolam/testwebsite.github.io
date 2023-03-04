import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';

function startfirebase(){
 const firebaseConfig = {
    apiKey: "AIzaSyAxWIghXZkowwNELaoyzuvdA5qCw1951MI",
    authDomain: "what-does-shu-say-2023.firebaseapp.com",
    projectId: "what-does-shu-say-2023",
    storageBucket: "what-does-shu-say-2023.appspot.com",
    messagingSenderId: "642750880334",
    appId: "1:642750880334:web:c55db6cb5f69d7a1a7011f",
    measurementId: "G-Q0N5T8XXNH"
  };
  const app = initializeApp(firebaseConfig);
  return getDatabase(app)
}

export default startfirebase;