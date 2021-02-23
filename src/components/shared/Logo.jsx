import React from 'react';
import themeImage from 'images/plant_theme6.jpeg';

const Logo = (props) => {
  return (
    <img src={ themeImage } { ...props } alt='Plantation logotype: earth surrounded by a plant branch' />
  );
};

export default Logo;
