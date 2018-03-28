import React from 'react';

const Company = ({ url, alt }) => (
  <li>
    <img src={url} alt={alt} />
  </li>
)

export default Company;