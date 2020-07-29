import React from 'react';
import Menu from '../../components/Menu'
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

function Home() {
  return (
    <div style={{ background: "#F5F5F5" }}>
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={
          "Assassinato e sinais misteriosos em uma trama para fãs de Stranger Things e Stephen King. Em 1986, Eddie e os amigos passam a maior parte dos dias andando de bicicleta pela pacata vizinhança em busca de aventuras. Os desenhos a giz são seu código secreto: homenzinhos rabiscados no asfalto; mensagens que só eles entendem. Mas um desenho misterioso leva o grupo de crianças até um corpo desmembrado e espalhado em um bosque. Depois disso, nada mais é como antes."}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />      

      <Carousel
        category={dadosIniciais.categorias[3]}
      />      

      <Carousel
        category={dadosIniciais.categorias[4]}
      />      

      <Carousel
        category={dadosIniciais.categorias[5]}
      />      

      <Footer />
    </div>
  );
}

export default Home;
