import React from 'react';
import Header from './Header.js'
import Footer from './Footer.js'
import Login from './Login.js'
import InitialView from './InitialView.js'
import firebase from 'firebase';


firebase.initializeApp({
  apiKey: "AIzaSyAF9CnCrkPu9qCrnoS0sq-kXajrR-gipOo",
  authDomain: "eventos-7f7c6.firebaseapp.com",
  databaseURL: "https://eventos-7f7c6.firebaseio.com",
  projectId: "eventos-7f7c6",
  storageBucket: "",
  messagingSenderId: "795388946771"
});

const App = ()=>(
  <div>
    <Header/>
    <InitialView />
    <Footer/>
  </div>

)


export default App;


