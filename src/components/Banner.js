import React from 'react';
import banner from '../assets/banner.jpg';
import '../styles/Banner.css';

const Banner = () => (
  <div>
    <div className="banner">
      <h2 className="text-center title">
        Organizar eventos nunca fue tan fácil.
      </h2>
      <hr />
      <h2 className="text-center title">
        Planifica tu tiempo y asiste a los
        <span>
          mejores eventos
        </span>
        que tenemos para ti.
      </h2>
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

export default Banner;