import React, { useState } from 'react';
import axios from 'axios';
import CampoInput from '../CampoInput/CampoInput';
import ListaCategoriasDropdown from '../ListaCategorias/ListaCategorias';
import Boton from '../Boton/Boton';
import { useNavigate } from 'react-router-dom';
import './Formulario.css'
import { ImCancelCircle } from 'react-icons/im';

const Formulario = ({ initialValues, onSubmit, onClose, formStyle, flexDirection, alignItems }) => {
  const [titulo, setTitulo] = useState(initialValues ? initialValues.titulo : '');
  const [imagen, setImagen] = useState(initialValues ? initialValues.imagen : '');
  const [video, setVideo] = useState(initialValues ? initialValues.video : '');
  const [descripcion, setDescripcion] = useState(initialValues ? initialValues.descripcion : '');
  const [categoria, setCategoria] = useState(initialValues ? initialValues.categoria : '');
  const navigate = useNavigate();

  const envio = (e) => {
    e.preventDefault();

    const datosEnviar = {
      titulo,
      imagen,
      video,
      descripcion,
      categoria
    };

    if (initialValues) {
      onSubmit(datosEnviar);
    } else {
      axios.post('http://localhost:5000/videos', datosEnviar)
        .then(response => {
          console.log('Video guardado:', response.data);
          limpiarFormulario();
          navigate('/nuevo-video');
        })
        .catch(error => {
          console.error('Error al guardar el video:', error);
        });
    }
  };

  const limpiarFormulario = () => {
    setTitulo('');
    setImagen('');
    setVideo('');
    setDescripcion('');
    setCategoria('');
  };

  const categorias = ['Frontend', 'Backend', 'Innovación y Gestión'];

  const formStyles = {
    display: 'flex',
    flexDirection: flexDirection || 'column', // Valor por defecto si no se proporciona
    alignItems: alignItems || 'center', // Valor por defecto si no se proporciona
    // Otros estilos de Flexbox según sea necesario
  };

  return (
    <form className={`formulario ${formStyle}`} style={formStyles} onSubmit={envio} onReset={limpiarFormulario}>
      <div className='lista-1'>
      <CampoInput
        tipo="text"
        titulo="Título"
        placeholder="Ingrese el título"
        requerido={true}
        valor={titulo}
        actualizarValor={setTitulo}
      />
       <ListaCategoriasDropdown
        categorias={categorias}
        valor={categoria}
        actualizarCategoria={setCategoria}
      />
      </div>
      <div className='lista-2'>
      <CampoInput
        tipo="text"
        titulo="Imagen"
        placeholder="Link de la imagen"
        requerido={true}
        valor={imagen}
        actualizarValor={setImagen}
      />
      <CampoInput
        tipo="text"
        titulo="Video"
        placeholder="Ingrese el enlace del vídeo"
        requerido={true}
        valor={video}
        actualizarValor={setVideo}
      />
      </div>
      <div className='lista-3'>
      <CampoInput
        tipo="textarea"
        titulo="Descripción"
        placeholder="¿De qué se trata este vídeo?"
        requerido={true}
        valor={descripcion}
        actualizarValor={setDescripcion}
      />
      </div>
      <div className="botones-formulario">
        {initialValues && <Boton 
        className="formulario-cancelar"
        Icono={ImCancelCircle}
        soloIcono={true}
        onClick={onClose}
        />} {/* Mostrar solo si es edición */}
        <Boton className="formulario-guardar" texto={initialValues ? 'Guardar' : 'Guardar'} type="submit" />
        <Boton className="formulario-limpiar" texto="Limpiar" type="reset" />
      </div>
    </form>
  );
};

export default Formulario;