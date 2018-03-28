import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import firebase from 'firebase';
// import Login from './Login.js';
// import SectionRegister from './SectionRegister.js';
// import AttendEvent from './AttendEvent.js';
import Session from './Data.js';

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
    <Session/>
    {/* <AttendEvent/> */}
    {/* <SectionRegister/> */}
    {/* <Login/> */}
    <Footer/>
  </div>

)

export default App;


