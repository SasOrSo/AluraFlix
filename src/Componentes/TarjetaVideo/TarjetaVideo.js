import React from 'react';
import './TarjetaVideo.css';
import { CiEdit } from "react-icons/ci";
import { MdOutlineDeleteForever } from "react-icons/md";


const TarjetaVideo = ({ video, eliminarVideo, editarVideo, colorCategoria }) => {
  const { id, titulo, imagen } = video;

  return (
    <div className='tarjeta-video' style={{ borderColor: colorCategoria, boxShadow: `0 0 17px 8px ${colorCategoria}` }}>
      <img src={imagen} alt={titulo} className='imagen-video'  style={{ borderColor: colorCategoria, boxShadow: `0 0 8px 5px ${colorCategoria}` }}/>
        <div className='botones'>
          <button onClick={() => eliminarVideo(id)}>
          <MdOutlineDeleteForever className='icono-eliminar' /> Borrar
          </button>
          <button onClick={() => editarVideo(id)}>
          <CiEdit className='icono-editar' /> Editar 
          </button>
        </div>
    </div>
  );
};

export default TarjetaVideo;





