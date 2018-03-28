import React from 'react';
import AddEvent from './AddEvent';
import '../styles/Header.css';

const Header = () => (
  <header>
    <nav className="navbar navbar-light">
      <div className="container">
        <a className="navbar-brand" href="">
          <img src="https://user-images.githubusercontent.com/32284212/37991844-dd31921e-31cf-11e8-9ac2-c2966feba60b.png" alt="logo"/>
        </a>
        <form className="form-inline my-2 my-lg-0">
          <AddEvent/>
          <button className="btn btn-white my-2 my-sm-0" type="submit">Inicia Sesión</button>
          <button className="btn btn-white my-2 my-sm-0" type="submit">Registrate</button>
        </form>
      </div>
    </nav>
  </header>
)
    
export default Header;