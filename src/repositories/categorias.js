import config from '../config';

const URL_CATEGORIES = `${config.URL}/categorias`;

async function getAll() {
  const response = await fetch(`${URL_CATEGORIES}`);
  if (response.ok) {
    const result = await response.json();
    return result;
  }
  throw new Error('Não foi possível consultar os dados');
}

async function getAllWithVideos() {
  const response = await fetch(`${URL_CATEGORIES}?_embed=videos`);
  if (response.ok) {
    const result = await response.json();
    return result;
  }
  throw new Error('Não foi possível consultar os dados');
}

async function create(obj) {
  const response = await fetch(`${URL_CATEGORIES}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  });
  if (response.ok) {
    const result = await response.json();
    return result;
  }
  throw new Error('Não foi possível cadastrar os dados');
}

export default {
  getAll,
  getAllWithVideos,
  create,
};
