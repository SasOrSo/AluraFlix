import React from 'react';
import Navegacion from '../Navegacion/Navegacion';
import './Header.css';

const Header = ({backgroundColor}) => {

  const headerStyle = {
    backgroundColor: backgroundColor || '#262626', // Color por defecto si no se pasa ningún prop
  };

  return (
    <header className='header' style={headerStyle}>
      <img src="./img/logo.png" alt="AluraFlix logo"/>
      < Navegacion />
     </header>
  );
};

export default Header;
