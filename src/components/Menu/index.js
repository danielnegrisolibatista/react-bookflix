import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/img/Logo.png';
import './Menu.css'
// import ButtonLink from '../Menu/components/ButtonLink'
import Button from '../Button'

function Menu() {
  return (
    <nav className="Menu">
      <div>
        <Link to="/">
          <img className="Logo" src={Logo} alt="Bookflix Logo"/>        
        </Link>
        <div className="ribbon"></div>
        <div className="LogoDescription">Assista antes de começar a ler!</div>
      </div>
      

      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;