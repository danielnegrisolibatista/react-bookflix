import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button';

function Menu() {
  const location = useLocation();

  return (
    <nav className="Menu">
      <div>
        <Link to="/">
          <img className="Logo" src={Logo} alt="Bookflix Logo" />
        </Link>
        <div className="ribbon" />
        <div className="texto-header">
          Assista antes de ler!
        </div>
      </div>
      {location.pathname.includes('video') && (
        <Button as={Link} className="ButtonLink" to="/cadastro/categoria">
          Novo categoria
        </Button>
      )}
      {!location.pathname.includes('video') && (
        <Button as={Link} className="ButtonLink" to="/cadastro/video">
          Novo vídeo
        </Button>
      )}
    </nav>
  );
}

export default Menu;
