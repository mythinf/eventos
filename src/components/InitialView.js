import React from 'react';
import Main from './Main';
import Banner from './Banner';
import Presentation from './Presentation';
import ContainerOptions from './ContainerOptions';
import Companies from './Companies';

const InitialView = () => (
  <div>
    <Banner />
    <div className="container-fluid">
      <Presentation />
      <ContainerOptions />
      <Companies />
    </div>
  </div>
)

export default InitialView;