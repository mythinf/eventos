import React from 'react';
import '../styles/Banner.css';

const Banner = () => (
  <section className="banner">
    <div className="overlay d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="offset-md-1 col-md-10">
            <h1 className="text-center title">
              Organizar eventos nunca fue tan fácil.
            <hr />
              Planifica tu tiempo y asiste a los
            <span className="color-red"> mejores eventos </span>
              que tenemos para ti.
            </h1>
          </div>
        </div>
      </div>
    </div>  
  </section>
)

export default Banner;