import React from 'react';
import './styles.css';

export default (({
  companyName,
  alt
}) => {
  return (
    <div className='logo'>
      <img src={ `/img/logos/${companyName}.png` } alt={ alt } />
    </div>
  );
});
