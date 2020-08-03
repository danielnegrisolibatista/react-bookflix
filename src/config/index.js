const URL = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://react-bookflix.herokuapp.com';

export default {
  URL,
};
