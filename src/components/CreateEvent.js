import React from 'react';

const loadContentCE = () => {
  console.log('Llama a AddEvent')
}

const CreateEvent = () => (
  <div className="col-md-5" onClick={loadContentCE}>
    <h4>
      Crea un evento
    </h4>
    <div>
      <p>
        Con nuestro directorio de socios,<br />
        nunca fue más fácil y seguro.
      </p>
      <span>
        <i className="far fa-calendar-plus"></i>
      </span>
    </div>
  </div>
)

export default CreateEvent;