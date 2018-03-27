import React from 'react';
import banner from '../assets/banner.jpg';
import '../styles/SectionBanner.css';

const SectionBanner = () => (
  <div>
    <div className="banner">
      <p className="text-center title">
        Organiza, busca eventos y <br /> haz networking
      </p>
    </div>
    <div className="row">
      <div className="offset-md-2 col-md-8">
        <h3 className="text-center">
          ¿Quiénes somos?
        </h3>
          <p className="text-center">
            En EventLab queremos que nada te detenga de tu desarollo profesional y personal, es por ello que te facilitamos la organziación de eventos corporativos, culturales, educativos y sociales, así como también nos encargamos de que no te pierdas de un solo evento que te interese y amplies tu red de contactos.
        </p>
      </div>
    </div>
  </div>
)

export default SectionBanner;