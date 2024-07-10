import React from 'react';
import './CampoInput.css';

const CampoInput = ({ tipo, titulo, placeholder, requerido, valor, actualizarValor }) => {
  const manejarCambio = (e) => {
    actualizarValor(e.target.value);
  };

  return (
    <div className="campo-texto">
      <label>{titulo}</label>
      {tipo === 'textarea' ? (
        <textarea
          placeholder={placeholder}
          required={requerido}
          value={valor}
          onChange={manejarCambio}        
        />
      ) : (
        <input
          type={tipo}
          placeholder={placeholder}
          required={requerido}
          value={valor}
          onChange={manejarCambio}         
        />
      )}
    </div>
  );
};

export default CampoInput;


