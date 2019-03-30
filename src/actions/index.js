import api from "../api";

export const FETCH_MOVIES_REQUEST = "FETCH_MOVIES_REQUEST";
export const FETCH_MOVIES_SUCCESS = "FETCH_MOVIES_SUCCESS";
export const FETCH_MOVIES_FAILURE = "FETCH_MOVIES_FAILURE";

export const FETCH_MOVIE_REQUEST = "FETCH_MOVIE_REQUEST";
export const FETCH_MOVIE_SUCCESS = "FETCH_MOVIE_SUCCESS";
export const FETCH_MOVIE_FAILURE = "FETCH_MOVIE_FAILURE";

export const FETCH_SIMILAR_MOVIE_REQUEST = "FETCH_SIMILAR_MOVIE_REQUEST";
export const FETCH_SIMILAR_MOVIE_SUCCESS = "FETCH_SIMILAR_MOVIE_SUCCESS";
export const FETCH_SIMILAR_MOVIE_FAILURE = "FETCH_SIMILAR_MOVIE_FAILURE";

export const FETCH_RECOMMENDATIONS_MOVIE_REQUEST = "FETCH_RECOMMENDATIONS_MOVIE_REQUEST";
export const FETCH_RECOMMENDATIONS_MOVIE_SUCCESS = "FETCH_RECOMMENDATIONS_MOVIE_SUCCESS";
export const FETCH_RECOMMENDATIONS_MOVIE_FAILURE = "FETCH_RECOMMENDATIONS_MOVIE_FAILURE";
// getPopularMovies
export const FETCH_POPULAR_MOVIES_REQUEST = "FETCH_POPULAR_MOVIES_REQUEST";
export const FETCH_POPULAR_MOVIES_SUCCESS = "FETCH_POPULAR_MOVIES_SUCCESS";
export const FETCH_POPULAR_MOVIES_FAILURE = "FETCH_POPULAR_MOVIES_FAILURE";
// getTopRatedMovies
export const FETCH_TOP_RATED_MOVIES_REQUEST = "FETCH_TOP_RATED_MOVIES_REQUEST";
export const FETCH_TOP_RATED_MOVIES_SUCCESS = "FETCH_TOP_RATED_MOVIES_SUCCESS";
export const FETCH_TOP_RATED_MOVIES_FAILURE = "FETCH_TOP_RATED_MOVIES_FAILURE";
// getNowPlaying
export const FETCH_NOW_PLAING_MOVIES_REQUEST = "FETCH_NOW_PLAING_MOVIES_REQUEST";
export const FETCH_NOW_PLAING_MOVIES_SUCCESS = "FETCH_NOW_PLAING_MOVIES_SUCCESS";
export const FETCH_NOW_PLAING_MOVIES_FAILURE = "FETCH_NOW_PLAING_MOVIES_FAILURE";

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

export const fetchSimilarMovieRequest = (id) => ({
  type: FETCH_SIMILAR_MOVIE_REQUEST,
  id
});

export const fetchSimilarMovieSuccess = ({ data }) => ({
  type: FETCH_SIMILAR_MOVIE_SUCCESS,
  ...data
});

export const fetchRecommendationsMovieRequest = (id) => ({
  type: FETCH_RECOMMENDATIONS_MOVIE_REQUEST,
  id
});

export const fetchRecommendationsMovieSuccess = ({ data }) => ({
  type: FETCH_RECOMMENDATIONS_MOVIE_SUCCESS,
  ...data
});

export const fetchPopularMoviesRequest = () => ({
  type: FETCH_POPULAR_MOVIES_REQUEST
});

export const fetchPopularMoviesSuccess = ({ data }) => ({
  type: FETCH_POPULAR_MOVIES_SUCCESS,
  ...data
});

export const fetchTopRatedMoviesRequest = () => ({
  type: FETCH_TOP_RATED_MOVIES_REQUEST
});

export const fetchTopRatedMoviesSuccess = ({ data }) => ({
  type: FETCH_TOP_RATED_MOVIES_SUCCESS,
  ...data
});

export const fetchNowPlayingRequest = () => ({
  type: FETCH_NOW_PLAING_MOVIES_REQUEST
});

export const fetchNowPlayingSuccess = ({ data }) => ({
  type: FETCH_NOW_PLAING_MOVIES_SUCCESS,
  ...data
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

export const fetchSimilarMovie = (id) => (dispatch) => {
  dispatch(fetchSimilarMovieRequest(id));

  return api
    .fetchSimilarMovie(id)
    .then((data) => dispatch(fetchSimilarMovieSuccess(data)))
    .catch((error) => console.log(error));
};

export const fetchRecommendationsMovie = (id) => (dispatch) => {
  dispatch(fetchRecommendationsMovieRequest(id));

  return api
    .fetchRecommendationsMovie(id)
    .then((data) => dispatch(fetchRecommendationsMovieSuccess(data)))
    .catch((error) => console.log(error));
};

export const fetchPopularMovies = () => (dispatch) => {
  dispatch(fetchPopularMoviesRequest());

  return api
    .fetchPopularMovies()
    .then((data) => dispatch(fetchPopularMoviesSuccess(data)))
    .catch((error) => console.log(error));
};

export const fetchTopRatedMovies = () => (dispatch) => {
  dispatch(fetchTopRatedMoviesRequest());

  return api
    .fetchTopRatedMovies()
    .then((data) => dispatch(fetchTopRatedMoviesSuccess(data)))
    .catch((error) => console.log(error));
};

export const fetchNowPlaying = () => (dispatch) => {
  dispatch(fetchNowPlayingRequest());

  return api
    .fetchNowPlaying()
    .then((data) => dispatch(fetchNowPlayingSuccess(data)))
    .catch((error) => console.log(error));
};
