import axios from 'axios';

const fetchPopularRepos = (language) => {
  const encodeURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:' +
    language + '&sort=starts&order=desc&type=Repositories');

  return axios.get(encodeURI)
    .then(response => response.data.items);
};


export default {
  fetchPopularRepos
}