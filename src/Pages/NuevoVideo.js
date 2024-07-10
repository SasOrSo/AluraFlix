import React from 'react';
import axios from 'axios';
import Formulario from '../Componentes/Formulario/Formulario';
import Header from '../Componentes/Header/Header';
import Footer from '../Componentes/Footer/Footer';
import { useNavigate } from 'react-router-dom';
import './NuevoVideo.css';

const NuevoVideo = () => {
  const navigate = useNavigate();

  const registrarVideo = (nuevoVideo) => {
    axios.post('http://localhost:5000/videos', nuevoVideo)
      .then(() => {
        navigate('/');
      })
      .catch(error => console.error('Error al registrar el video:', error));
  };

  return (
    <div className='nuevo-video'>
      <Header backgroundColor= "#000000"/>
      <div className='formulario-titulo'>
        <h1>Nuevo Video</h1>
        <p>Complete el formulario para crear una nueva tarjeta de video</p>
        <h3>Crear Tarjeta</h3>
      </div>
      <Formulario formStyle="estilo-nuevo-video"
        onSubmit={registrarVideo} // Cambiar a onSubmit para coincidir con Formulario
      />
      <Footer />
    </div>
  );
};

export default NuevoVideo;

