import config from '../config';

const URL_VIDEOS = `${config.URL}/videos`;

async function getAll() {
  const response = await fetch(`${URL_VIDEOS}`);
  if (response.ok) {
    const result = await response.json();
    return result;
  }
  throw new Error('Não foi possível consultar os dados');
}

async function create(obj) {
  const response = await fetch(`${URL_VIDEOS}`, {
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
  create,
};
