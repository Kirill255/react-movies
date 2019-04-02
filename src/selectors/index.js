import { createSelector } from "reselect";

export const getRouterLocationSelector = (state) => state.router.location;

export const isLoggingInSelector = (state) => state.session.isLoggingIn;
export const isLoggedInSelector = (state) => state.session.isLoggedIn;

export const getAuthErrorSelector = (state) => state.session.error;
export const getNextLocationSelector = createSelector(
  getRouterLocationSelector,
  (location) => location.state && location.state.nextLocation
);

export const getMovieSelector = (state) => state.movie.info;
export const isMovieFetchingSelector = (state) => state.movie.isFetching;
export const getMovieIdSelector = (state, props) => props.match.params.id;

export const getSearchMoviesSelector = (state) => state.movies.items;
export const getSearchMoviesCountSelector = createSelector(
  getSearchMoviesSelector,
  (movies) => movies.length
);
export const getSearchMoviesVoteAverageSelector = createSelector(
  getSearchMoviesSelector,
  getSearchMoviesCountSelector,
  (movies, totalCount) => movies.reduce((sum, movie) => (sum += movie.voteAverage), 0) / totalCount
);
export const isSearchMoviesFetchingSelector = (state) => state.movies.isFetching;
export const getMoviesSearchQuerySelector = createSelector(
  getRouterLocationSelector,
  (location) => location.query.search
);
