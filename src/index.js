import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';

import App from './App';
import './index.css';

  firebase.initializeApp({
    apiKey: "AIzaSyAF9CnCrkPu9qCrnoS0sq-kXajrR-gipOo",
    authDomain: "eventos-7f7c6.firebaseapp.com",
    databaseURL: "https://eventos-7f7c6.firebaseio.com",
    projectId: "eventos-7f7c6",
    storageBucket: "",
    messagingSenderId: "795388946771"
  }); 


ReactDOM.render(<App />, document.getElementById('root'));