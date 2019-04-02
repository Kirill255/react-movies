export const isLoggingInSelector = (state) => state.session.isLoggingIn;
export const isLoggedInSelector = (state) => state.session.isLoggedIn;

export const getAuthErrorSelector = (state) => state.session.error;
export const getNextLocationSelector = (state) =>
  state.router.location.state && state.router.location.state.nextLocation;

export const getMovieSelector = (state) => state.movie.info;
export const isMovieFetchingSelector = (state) => state.movie.isFetching;
export const getMovieIdSelector = (state, props) => props.match.params.id;

export const getSearchMoviesSelector = (state) => state.movies.items;
export const getSearchMoviesCountSelector = (state) => getSearchMoviesSelector(state).length;
export const isSearchMoviesFetchingSelector = (state) => state.movies.isFetching;
export const getMoviesSearchQuerySelector = (state) => state.router.location.query.search;
