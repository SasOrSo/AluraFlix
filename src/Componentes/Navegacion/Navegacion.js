import React from 'react';
import { Link } from 'react-router-dom';
import './Navegacion.css';

const Navegacion = () => {
  return (
    <nav className='navigation-bar'>
      <ul>
        <li className='home'>
            <Link to="/"><i className="fas fa-home nav-icon"></i>
              <span className="nav-text">Home</span>
            </Link>
          </li>
        <li className='nuevo-video'>
            <Link to="/nuevo-video"><i className="fas fa-plus-circle nav-icon"></i>
              <span className="nav-text">Nuevo Video</span>
            </Link>
          </li>
      </ul>
    </nav>
  );
};

export default Navegacion;
