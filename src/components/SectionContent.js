import React from 'react';
import Laboratoria from '../assets/laboratoria.png';
import BCP from '../assets/bcp.png';
import IBM from '../assets/ibm.png';
import Alicorp from '../assets/alicorp.png';
import CAT from '../assets/cat.jpg';
import Falabella from '../assets/falabella.png';
import '../styles/SectionContent.css';

// import '../styles/SectionContent.css';

const SectionContent = () => (
  <div>
    <div className="row">
    </div>
    <div className="row">
      <div className="offset-md-4 col-md-4">
        <h5 className="text-center">
          Algunas empresas con las que trabajamos
        </h5>
        <ul>
          <li className="corporation">
            <img src={Laboratoria} alt="Laboratoria" className="img-fluid" />
          </li>
          <li className="corporation">
            <img src={BCP} alt="Laboratoria" className="img-fluid" />
          </li>
          <li className="corporation">
            <img src={IBM} alt="Laboratoria" className="img-fluid" />
          </li>
          <li className="corporation">
            <img src={Alicorp} alt="Laboratoria" className="img-fluid" />
          </li>
          <li className="corporation">
            <img src={CAT} alt="Laboratoria" className="img-fluid" />
          </li>
          <li className="corporation">
            <img src={Falabella} alt="Laboratoria" className="img-fluid" />
          </li>
        </ul>
      </div>
    </div>
  </div>
)

export default SectionContent;