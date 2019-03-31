import axios from "axios";
import camelcaseKeys from "camelcase-keys";
import jwt from "jwt-simple";

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

export function fetchPopularMovies() {
  const params = {
    api_key: API_KEY
  };

  return axios
    .get(`${API_PREFIX}/movie/popular`, { params })
    .then((data) => camelcaseKeys(data, { deep: true }));
}
export function fetchTopRatedMovies() {
  const params = {
    api_key: API_KEY
  };

  return axios
    .get(`${API_PREFIX}/movie/top_rated`, { params })
    .then((data) => camelcaseKeys(data, { deep: true }));
}
export function fetchNowPlaying() {
  const params = {
    api_key: API_KEY
  };

  return axios
    .get(`${API_PREFIX}/movie/now_playing`, { params })
    .then((data) => camelcaseKeys(data, { deep: true }));
}

// auth
const USERS = [
  {
    login: "max",
    name: "Max",
    avatar: "https://pbs.twimg.com/profile_images/80699901/max_400x400.jpg",
    password: "qwerty12345"
  },
  {
    login: "kotik9000",
    name: "Marysya",
    avatar: "https://pbs.twimg.com/profile_images/668830888499789824/Yf2U7LjB.jpg",
    password: "12345678"
  }
];

const SECRET = "react2";

export function auth(login, password) {
  return new Promise((resolve, reject) => {
    const user = USERS.find((user) => user.login === login);

    if (!user) {
      return reject("User does not exist");
    }

    if (user.password !== password) {
      return reject("Pasword is incorrect");
    }

    return resolve({
      user,
      token: jwt.encode(user, SECRET)
    });
  });
}

export function checkAuth(token) {
  return new Promise((resolve, reject) => {
    if (!token) {
      return reject("User is not authentificated");
    }

    const decodedUser = jwt.decode(token, SECRET);

    const loggedInUser = USERS.find((user) => user.login === decodedUser.login);

    if (!loggedInUser) {
      return reject("User does not exist");
    }

    return resolve({
      user: loggedInUser,
      token
    });
  });
}

export default {
  searchMovies,
  fetchMovie,
  fetchSimilarMovie,
  fetchRecommendationsMovie,
  fetchPopularMovies,
  fetchTopRatedMovies,
  fetchNowPlaying,
  auth,
  checkAuth
};
