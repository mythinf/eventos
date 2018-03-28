import React from 'react';
import ButtonEvent from './buttonEvent.js';

const AttendEvent = () => (
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
    <div className="row">
      <div className="col-sm-5">
        <img src="https://user-images.githubusercontent.com/32284212/38007168-ab2fec14-320d-11e8-8406-39802bc58734.png" className="img-fluid" alt="evento" />
      </div>
      <div className="col-sm-7">
        <p>El Linograbado es una variante del grabado en madera en la que una hoja de linóleo (a veces montados en un bloque de madera) se utiliza para la superficie en relieve. </p>
        <p>Es un método de grabado artístico muy parecido a la xilografía que usa el linóleo como material para la plancha. El artista graba la plancha con un buril, ahuecando aquellas zonas en las que no quiere que se deposite tinta. </p>
        <p>Este curso práctico busca explorar las posibilidades gráficas de la impresión en relieve y desarrollar un lenguaje propio a través del linograbado.</p>
        <ul className="page-ul p-0">
          <li><img src="https://user-images.githubusercontent.com/32284212/38008529-dae87a5a-3214-11e8-8aa8-f3b0be3d2edd.png" className="mt-1" alt="ticket" />
          <p className="m-0">Disponibles</p>
          <p>30</p>
          </li>
          <li><img src="https://user-images.githubusercontent.com/32284212/38008279-71f1ed8e-3213-11e8-9db7-d41ee6bba22e.png" className="mt-1" alt="marcador" />
          <p className="m-0">Universidad</p>
          <p>San Marcos</p>
          </li>
          <li><img src="https://user-images.githubusercontent.com/32284212/38008293-86ad77b6-3213-11e8-9c4c-768c359fd2e7.png" alt="calendario" />
          <p className="m-0">12 de Mayo</p>
          <p className="text-white">.</p>
          </li>
          <li><img src="https://user-images.githubusercontent.com/32284212/38008313-9713ae40-3213-11e8-989b-38e8c65d26a0.png" alt="reloj" />
          <p className="text-center m-0">5:00pm</p>
          <p className="text-white">.</p>
          </li>
        </ul>
        <ButtonEvent/>
      </div>
    </div>
  </div>
)
export default AttendEvent