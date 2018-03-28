import React from 'react';
import CreateEvent from './CreateEvent';
import SearchEvent from './SearchEvent';
import '../styles/ContainerOptions.css';

const ContainerOptions = () => (
  <div className="row bg-red text-center">
    <CreateEvent />
    <img src="http://www.thefarmstandwest.com/wp-content/uploads/2017/01/vertical-line-white-150x150.png" alt="Línea" className="col-md-2" />
    <SearchEvent />
  </div>
)

export default ContainerOptions;