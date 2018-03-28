import React from 'react';
<<<<<<< HEAD
import Header from './Header.js';
import Footer from './Footer.js';
import Login from './Login.js';
=======
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
// import Login from './Login'
import InitialView from './InitialView';
>>>>>>> b56c86bcab69774763a781a1592b410eebf4bf1f
import firebase from 'firebase';
// import SectionRegister from './SectionRegister';
import AttendEvent from './AttendEvent.js';
import Session from './DataEvents.js';

firebase.initializeApp({
  apiKey: "AIzaSyAF9CnCrkPu9qCrnoS0sq-kXajrR-gipOo",
  authDomain: "eventos-7f7c6.firebaseapp.com",
  databaseURL: "https://eventos-7f7c6.firebaseio.com",
  projectId: "eventos-7f7c6",
  storageBucket: "",
  messagingSenderId: "795388946771"
});

const App = () => (
  <div>
    <Header/>
<<<<<<< HEAD
    <SectionRegister/>
    <Login/> 
=======
    <Session/>
    <AttendEvent/>
    {/* <SectionRegister/> */}
    {/* <Login/> */}
    <InitialView />
    {/* <Main /> */}
>>>>>>> b56c86bcab69774763a781a1592b410eebf4bf1f
    <Footer/>
  </div>
)

export default App;


