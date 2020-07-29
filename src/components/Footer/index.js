import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
      <p>
        <a href="https://www.alura.com.br/imersao-react/">
          <img style={{ width: '150px' }} src="https://www.alura.com.br/assets/img/imersoes/react/imersao-react-logo.1594044142.svg" alt="Imersão React" />
        </a>          
      </p>
    </FooterBase>
  );
}

export default Footer;