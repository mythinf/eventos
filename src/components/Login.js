import React, { Component } from 'react';
import firebase from 'firebase';
import '../styles/Login.css';
import Session from './DataEvents';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    };

    this.handleAuth = this.handleAuth.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user });
    });
  }

  handleAuth() {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
      .then(result => console.log(`${result.user.email} ha iniciado sesión`))
      .catch(error => console.log(`Error ${error.code}: ${error.message}`));
  }

  handleLogout() {
    firebase.auth().signOut()
      .then(result => console.log(`${result.user.email} ha salido de la sesión`))
      .catch(error => console.log(`Error ${error.code}: ${error.message}`));
  }

  renderLoginButton() {
    // si el usuario está logeado
    if (this.state.user) {
      return (
        <div>
          <nav>
            <ul className="user">
              <img className="rounded-circle prolife" width="100" src={this.state.user.photoURL} alt={this.state.user.displayName} />
              <li className="name">{this.state.user.displayName}</li>
              <button className="btn btn-info btn-lg logout" onClick={this.handleLogout}>Logout</button>
            </ul>
          </nav>
          <Session />
        </div>
      );
    } else {
      return (
        // si no lo está
        <button className="btn btn-white my-2 my-sm-0" onClick={this.handleAuth}>Inicia sesión</button>
      );
    }
  }
  render() {
    return (this.renderLoginButton());
  }
}

export default Login;
