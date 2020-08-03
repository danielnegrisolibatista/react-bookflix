import React, { useEffect, useState } from 'react';

import PageDefault from '../../components/PageDefault';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Loading from '../../components/Loading';

import categoriasRepository from '../../repositories/categorias';

import './Home.css';

function Home() {
  const [initialValues, setInitialValues] = useState([]);

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((response) => {
        setInitialValues(response);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <PageDefault paddingAll={0}>

      {initialValues.length === 0 && (<Loading />)}

      {initialValues.map((categoria, index) => {
        if (index === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={initialValues[0].videos[0].title}
                url={initialValues[0].videos[0].url}
                videoDescription="Assassinato e sinais misteriosos em uma trama para fãs de Stranger Things e Stephen King. Em 1986, Eddie e os amigos passam a maior parte dos dias andando de bicicleta pela pacata vizinhança em busca de aventuras. Os desenhos a giz são seu código secreto: homenzinhos rabiscados no asfalto; mensagens que só eles entendem. Mas um desenho misterioso leva o grupo de crianças até um corpo desmembrado e espalhado em um bosque. Depois disso, nada mais é como antes."
              />

              <Carousel
                ignoreFirstVideo
                category={initialValues[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}

    </PageDefault>
  );
}

export default Home;
