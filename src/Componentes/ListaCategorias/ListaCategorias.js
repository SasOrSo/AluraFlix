import React from 'react';

const ListaCategoriasDropdown = ({ categorias, valor, actualizarCategoria }) => {
  const manejarCambio = (e) => {
    actualizarCategoria(e.target.value);
  };

  return (
    <div className="campo-texto">
      <label>Categoría</label>
      <select value={valor} onChange={manejarCambio}>
        <option value="">Selecciona una categoría</option>
        {categorias.map(categoria => (
          <option key={categoria} value={categoria}>{categoria}</option>
        ))}
      </select>
    </div>
  );
};

export default ListaCategoriasDropdown;