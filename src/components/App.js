import React from 'react';
import Header from './Header'
import Main from './Main';
import Footer from './Footer'
// import Login from './Login'
import InitialView from './InitialView'
import firebase from 'firebase';
// import SectionRegister from './SectionRegister';

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
    {/* <SectionRegister/> */}
    {/* <Login/> */}
    <InitialView />
    {/* <Main /> */}
    <Footer/>
  </div>
)

export default App;


