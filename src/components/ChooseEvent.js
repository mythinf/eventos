import React from 'react';
import SessionList from './SessionList.js';

const ChooseEvent = ({ sesiones }) => (
  <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="navbar-nav">
        <a className="nav-item nav-link active" href="">Arte y Cultura<span className="sr-only">(current)</span></a>
        <a className="nav-item nav-link" href="">Crecimiento Personal</a>
        <a className="nav-item nav-link" href="">Marketing</a>
        <a className="nav-item nav-link" href="">Negocios</a>
        <a className="nav-item nav-link" href="">Tecnología</a>
      </div>
    </nav>
    <div className="container-fluid">
      <h5>Arte y Cultura</h5>
      <hr />
      <div className="mb-5">
        <div className="row">
          {sesiones.map(e =>
            <SessionList
              key={e.image}
              {...e}
            />
          )}
        </div>
      </div>
    </div>
  </div>
)

export default ChooseEvent