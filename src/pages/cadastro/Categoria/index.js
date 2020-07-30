import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault'
import FormField from '../../../components/FormField'

function CadastroCategoria() {
  const formDataDefault = {
    name: '',
    description: '',
    color: '',
  }

  const [formData, setFormData] = useState(formDataDefault);
  const [categorias, setCategorias] = useState([]);
  
  function setValue(key, value) {
    setFormData({
      ...formData,
      [key]: value
    })
  }

  function handleChange(event) {
    setValue(
      event.target.getAttribute('name'),
      event.target.value
    );
  }

  function handleSubmit(event) {
      event.preventDefault();
      setCategorias([
        ...categorias,
        formData
      ]);

      setFormData(formDataDefault)
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria {formData.name}</h1>

      <form onSubmit={handleSubmit}>
        <FormField
          label="Nome"
          type="text"
          name="name"
          value={formData.name}
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


        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        { 
          categorias.map((categoria, index) => {
            return (
              <li key={`${categoria}${index}`}>
                {categoria.name}
              </li>
            )
          })
        }
      </ul>


      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
