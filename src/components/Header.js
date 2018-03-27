import React from 'react';
import AddEvent from './AddEvent';

const Header = () => (
  <div>
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="">
        <img src="https://user-images.githubusercontent.com/32284212/37991844-dd31921e-31cf-11e8-9ac2-c2966feba60b.png" width="30" height="30" alt="logo"/>
     </a>
     <form className="form-inline my-2 my-lg-0">
      <AddEvent/>
      <button className="btn btn-link my-2 my-sm-0" type="submit">Inicia Sesión</button>
      <button className="btn btn-link my-2 my-sm-0" type="submit">Registrate</button>
    </form>
    </nav>
  </div>
  
    )
    
export default Header