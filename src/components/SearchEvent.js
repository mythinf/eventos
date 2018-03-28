import React from 'react';

const loadContentSE = () => {
  console.log('Muestra vista con eventos')
}

const SearchEvent = () => (
  <div className="col-md-5" onClick={loadContentSE}>
    <h4>
      Busca eventos
    </h4>
    <div>
      <p>
        Encuentra los mejores eventos y<br />
        haz networking.
      </p>
      <span>
        <i className="fas fa-search"></i>
      </span>
    </div>
  </div>
)

export default SearchEvent;