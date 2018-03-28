import React from 'react';
import '../styles/Companies.css';
import companies from '../assets/companies.jpg';

// const company = this.props.dataCompanies.map((index, url) => {
//   console.log(company)
//   return
//     <li key={index}>
//       <img src={url}/>
//     </li>
// })

const Companies = () => (
  <div className="row fullpad">
    <div className="offset-md-2 col-md-8">
      <h5 className="text-center">
        Algunas empresas con las que trabajamos
      </h5>
      <img src={companies} alt="companies"/>
    </div>
  </div>
)

export default Companies;