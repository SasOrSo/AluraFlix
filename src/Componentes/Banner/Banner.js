import React from 'react';
import './Banner.css';

const Banner = ({ videosDestacados }) => {
  return (
    <div className='banner'>
<div className="videos-destacados">
        {videosDestacados.map(video => (
          <div key={video.id} className="video-destacado">
             <div className="info-video">
              <h1 className="categoria-video">{video.categoria}</h1>
              <h2>{video.titulo}</h2>
              <p className="descripcion-video">{video.descripcion}</p>
            </div>
            <img src={video.imagen} alt={video.titulo} className="imagen-banner" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;

