import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import VideoCard from '../../../components/Carousel/components/VideoCard';
import PageDefault from '../../../components/PageDefault';
import { Formulario, BoxForm } from '../../../components/Form';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

import categoriasRepository from '../../../repositories/categorias';
import videosRepository from '../../../repositories/videos';

function CadastroVideo() {
  const history = useHistory();

  const formDataDefault = {
    title: '',
    url: '',
    categoria: '',
  };

  const { formData, handleChange } = useForm(formDataDefault);
  const [categorias, setCategorias] = useState([]);
  const categoriaTitles = categorias.map(({ title }) => title);

  function handleSubmit(event) {
    event.preventDefault();

    const categoriaSelected = categorias.find(
      (categoria) => categoria.title === formData.categoria,
    );

    const novoVideo = {
      title: formData.title,
      url: formData.url,
      categoriaId: categoriaSelected.id,
    };

    videosRepository.create(novoVideo)
      .then(() => {
        history.push('/');
      });
  }

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((result) => {
        setCategorias(result);
      });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Video</h1>

      <BoxForm>
        <Formulario onSubmit={handleSubmit}>
          <FormField
            label="Nome"
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />

          <FormField
            label="URL"
            type="text"
            name="url"
            value={formData.url}
            onChange={handleChange}
          />

          <FormField
            label="Categoria"
            type="text"
            name="categoria"
            value={formData.categoria}
            onChange={handleChange}
            suggestions={
              categoriaTitles
            }
          />

          <Button>
            Cadastrar
          </Button>
        </Formulario>

        {formData.url !== '' && (
          <div>
            <h3>Preview</h3>
            <VideoCard
              videoTitle={formData.title}
              videoURL={formData.url}
            />
          </div>
        )}
      </BoxForm>
    </PageDefault>
  );
}

export default CadastroVideo;
