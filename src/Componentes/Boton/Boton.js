import React from 'react';
import PropTypes from 'prop-types';
import './Boton.css';

const Boton = ({ className = '', texto, onClick, type = 'button', Icono, soloIcono = false }) => {
  return (
    <button
      className={`boton ${className} ${soloIcono ? 'boton-solo-icono' : ''}`}
      onClick={onClick}
      type={type}
    >
      {Icono && <Icono style={{ marginRight: texto && !soloIcono ? '5px' : '0' }} />}
      {!soloIcono && texto}
    </button>
  );
};

Boton.propTypes = {
  className: PropTypes.string,
  texto: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  Icono: PropTypes.elementType,
  soloIcono: PropTypes.bool,
};

export default Boton;
