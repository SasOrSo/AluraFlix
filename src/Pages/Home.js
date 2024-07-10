import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Banner from '../Componentes/Banner/Banner';
import Footer from '../Componentes/Footer/Footer';
import Header from '../Componentes/Header/Header';
import EditarVideo from '../Componentes/EditarVideo/EditarVideo'; 
import Categorias from '../Componentes/Categorias/Categorias'; 

const Home = () => {
  const [videos, setVideos] = useState([]);
  const [categorias, setCategorias] = useState([
    { titulo: 'Frontend', color: '#6BD1FF', videos: [] },
    { titulo: 'Backend', color: '#00C86F', videos: [] },
    { titulo: 'Innovación y Gestión', color: '#FFBA05', videos: [] }
  ]);
  const [mostrarEdicion, setMostrarEdicion] = useState(false); // Estado para mostrar el pop-up de edición
  const [videoIdEditar, setVideoIdEditar] = useState(null); // Estado para el ID del video a editar

  useEffect(() => {
    cargarVideos();
  }, []);

  const cargarVideos = () => {
    axios.get('http://localhost:5000/videos')
      .then(response => {
        const videos = response.data;
        const categoriasActualizadas = categorias.map(categoria => ({
          ...categoria,
          videos: videos.filter(video => video.categoria === categoria.titulo)
        }));
        setVideos(videos);
        setCategorias(categoriasActualizadas);
      })
      .catch(error => console.error('Error al cargar los videos:', error));
  };

  const eliminarVideo = (id) => {
    axios.delete(`http://localhost:5000/videos/${id}`)
      .then(() => {
        const videosActualizados = videos.filter(video => video.id !== id);
        setVideos(videosActualizados);
        const categoriasActualizadas = categorias.map(categoria => ({
          ...categoria,
          videos: videosActualizados.filter(video => video.categoria === categoria.titulo)
        }));
        setCategorias(categoriasActualizadas);
      })
      .catch(error => console.error('Error al eliminar el video:', error));
  };

  const abrirEdicion = (id) => {
    setVideoIdEditar(id);
    setMostrarEdicion(true);
  };

  const cerrarEdicion = () => {
    setMostrarEdicion(false);
    setVideoIdEditar(null);
    cargarVideos(); // Actualizar la lista de videos después de editar
  };

  return (
    <div>
      <Header />
      <Banner videosDestacados={videos.slice(0, 1)} />
      
      {/* Renderizar las tarjetas de video */}
      <Categorias
        categorias={categorias}
        eliminarVideo={eliminarVideo}
        editarVideo={abrirEdicion} // Pasar abrirEdicion como editarVideo
      />
      
      <Footer />

      {/* Modal de Edición */}
      {mostrarEdicion && (
        <EditarVideo videoId={videoIdEditar} onClose={cerrarEdicion} />
      )}
    </div>
  );
};

export default Home;

