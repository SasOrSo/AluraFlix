import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Formulario from '../Formulario/Formulario';
import './Modal.css';
import './EditarVideo.css'


const EdicionVideo = ({ videoId, onClose }) => {
  const [video, setVideo] = useState(null);

  useEffect(() => {
    // Cargar los datos del video a editar
    axios.get(`http://localhost:5000/videos/${videoId}`)
      .then(response => {
        setVideo(response.data);
      })
      .catch(error => console.error('Error al cargar el video:', error));
  }, [videoId]);

  const editarVideo = (datosActualizar) => {
    axios.put(`http://localhost:5000/videos/${videoId}`, datosActualizar)
      .then(response => {
        console.log('Video actualizado:', response.data);
        onClose(); 
      })
      .catch(error => console.error('Error al actualizar el video:', error));
  };

  return (
    <div className="modal">
      <div className="modal-contenido">
        <h2>Editar Card:</h2>
        {video && (
          <Formulario formStyle="estilo-editar-video"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="flex-start"
            initialValues={video}
            onSubmit={editarVideo}
            onClose={onClose}
          />
        )}
      </div>
    </div>
  );
};

export default EdicionVideo;

