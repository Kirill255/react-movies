import api from "../api";

export const FETCH_MOVIES_REQUEST = "FETCH_MOVIES_REQUEST";
export const FETCH_MOVIES_SUCCESS = "FETCH_MOVIES_SUCCESS";
export const FETCH_MOVIES_FAILURE = "FETCH_MOVIES_FAILURE";

export const FETCH_MOVIE_REQUEST = "FETCH_MOVIE_REQUEST";
export const FETCH_MOVIE_SUCCESS = "FETCH_MOVIE_SUCCESS";
export const FETCH_MOVIE_FAILURE = "FETCH_MOVIE_FAILURE";

/*
 ** Actions
 */

export const fetchMoviesRequest = (query) => ({
  type: FETCH_MOVIES_REQUEST,
  query
});

export const fetchMoviesSuccess = ({ data }) => ({
  type: FETCH_MOVIES_SUCCESS,
  ...data
});

export const fetchMovieRequest = (id) => ({
  type: FETCH_MOVIE_REQUEST,
  id
});

export const fetchMovieSuccess = ({ data }) => ({
  type: FETCH_MOVIE_SUCCESS,
  movie: data
});

/*
 ** Thunks
 */

export const searchMovies = (query) => (dispatch) => {
  dispatch(fetchMoviesRequest(query));

  return api
    .searchMovies(query)
    .then((data) => dispatch(fetchMoviesSuccess(data)))
    .catch((error) => console.log(error));
};

export const fetchMovie = (id) => (dispatch) => {
  dispatch(fetchMovieRequest(id));

  return api
    .fetchMovie(id)
    .then((data) => dispatch(fetchMovieSuccess(data)))
    .catch((error) => console.log(error));
};
