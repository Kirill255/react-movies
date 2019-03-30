import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import history from "../history";

import {
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIE_REQUEST,
  FETCH_MOVIE_SUCCESS,
  FETCH_SIMILAR_MOVIE_REQUEST,
  FETCH_SIMILAR_MOVIE_SUCCESS,
  FETCH_RECOMMENDATIONS_MOVIE_REQUEST,
  FETCH_RECOMMENDATIONS_MOVIE_SUCCESS
} from "../actions";

const movies = (state = { isFetching: false, items: [] }, action) => {
  switch (action.type) {
    case FETCH_MOVIES_REQUEST:
      return {
        ...state,
        isFetching: true
      };

    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        items: action.results
      };

    default:
      return state;
  }
};

const movie = (state = { isFetching: false, info: {} }, action) => {
  switch (action.type) {
    case FETCH_MOVIE_REQUEST:
      return {
        ...state,
        isFetching: true
      };

    case FETCH_MOVIE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        info: action.movie
      };

    default:
      return state;
  }
};

const relatedmovies = (state = { isFetching: false, recommendations: [], similar: [] }, action) => {
  switch (action.type) {
    case FETCH_SIMILAR_MOVIE_REQUEST:
    case FETCH_RECOMMENDATIONS_MOVIE_REQUEST:
      return {
        ...state,
        isFetching: true
      };

    case FETCH_SIMILAR_MOVIE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        similar: action.results
      };

    case FETCH_RECOMMENDATIONS_MOVIE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        recommendations: action.results
      };

    default:
      return state;
  }
};

export default combineReducers({ router: connectRouter(history), movies, movie, relatedmovies });
