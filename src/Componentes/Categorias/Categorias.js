import React from 'react';
import './Categorias.css';
import TarjetaVideo from '../TarjetaVideo/TarjetaVideo';

const Categorias = ({ categorias, eliminarVideo, editarVideo }) => {
  return (
    <div className='categorias'>
      {categorias.map(categoria => (
        <div key={categoria.titulo}>
          <h2 style={{ backgroundColor: categoria.color }}>{categoria.titulo}</h2>
          <div className="lista-videos">
          {categoria.videos.map(video => (
            <TarjetaVideo
              key={video.id}
              video={video}
              eliminarVideo={eliminarVideo}
              editarVideo={editarVideo} 
              colorCategoria={categoria.color} 
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categorias;

