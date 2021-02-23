import React from 'react';
import themeImage from 'images/Plantation-Logo-layout-1.jpg';

const Logo = (props) => {
  return (
    <img src={ themeImage } { ...props } alt='Plantation logotype: earth surrounded by a plant branch' />
  );
};

export default Logo;
