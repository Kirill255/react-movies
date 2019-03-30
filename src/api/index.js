import axios from "axios";
import camelcaseKeys from "camelcase-keys";

const API_PREFIX = "https://api.themoviedb.org/3";
const API_KEY = "8c9f0b25d628dc3a96bcc112d2c82e63"; // "cb8c255cd5c9be31d0d60734f0bbef58", "7985411c015901cd0f030ce010fa69c4"

export function searchMovies(query) {
  const params = {
    api_key: API_KEY,
    query
  };

  return axios
    .get(`${API_PREFIX}/search/movie`, { params })
    .then((data) => camelcaseKeys(data, { deep: true }));
}

export function fetchMovie(id) {
  const params = {
    api_key: API_KEY
  };

  return axios
    .get(`${API_PREFIX}/movie/${id}`, { params })
    .then((data) => camelcaseKeys(data, { deep: true }));
}

export function fetchSimilarMovie(id) {
  const params = {
    api_key: API_KEY
  };

  return axios
    .get(`${API_PREFIX}/movie/${id}/similar`, { params })
    .then((data) => camelcaseKeys(data, { deep: true }));
}

export function fetchRecommendationsMovie(id) {
  const params = {
    api_key: API_KEY
  };

  return axios
    .get(`${API_PREFIX}/movie/${id}/recommendations`, { params })
    .then((data) => camelcaseKeys(data, { deep: true }));
}

export default {
  searchMovies,
  fetchMovie,
  fetchSimilarMovie,
  fetchRecommendationsMovie
};
