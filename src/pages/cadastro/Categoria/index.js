import React, { useState, useEffect } from 'react';

import PageDefault from '../../../components/PageDefault';
import {
  Formulario,
  BoxForm,
  Listagem,
  ListagemItem,
  ListagemLinha,
  Color,
} from '../../../components/Form';

import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import Loading from '../../../components/Loading';
import useForm from '../../../hooks/useForm';

import categoriasRepository from '../../../repositories/categorias';

function CadastroCategoria() {
  const formDataDefault = {
    title: '',
    description: '',
    color: '',
  };

  const { formData, handleChange, clearForm } = useForm(formDataDefault);
  const [categorias, setCategorias] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();

    const novaCategoria = {
      title: formData.title,
      description: formData.description,
      color: formData.color,
    };

    categoriasRepository.create(novaCategoria)
      .then(() => {
        setCategorias([
          ...categorias,
          formData,
        ]);
      });

    clearForm();
  }

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((result) => {
        setCategorias([
          ...result,
        ]);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        {`Cadastro de Categoria  ${formData.title}`}
      </h1>

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
            label="Descrição"
            type="textarea"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />

          <FormField
            label="Cor"
            type="color"
            name="color"
            value={formData.color}
            onChange={handleChange}
          />

          <Button>
            Cadastrar
          </Button>
        </Formulario>

        <Listagem>
          <h3>Categorias cadastradas</h3>
          {categorias.length === 0 && (<Loading />)}
          {categorias.map((categoria) => (
            <ListagemItem key={`${categoria.title}`}>
              <ListagemLinha>
                <Color color={categoria.color} />
                <span>{ categoria.title }</span>
              </ListagemLinha>
            </ListagemItem>
          ))}
        </Listagem>
      </BoxForm>
    </PageDefault>
  );
}

export default CadastroCategoria;
