import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";

import SearchBox from "../components/SearchBox";
import Loader from "../components/Loader";
import MovieGrid from "../components/MovieGrid";

import { searchMovies } from "../actions";
import {
  getSearchMoviesSelector,
  getSearchMoviesCountSelector,
  getSearchMoviesVoteAverageSelector,
  isSearchMoviesFetchingSelector,
  getMoviesSearchQuerySelector
} from "../selectors";

const styles = {
  container: {
    height: "100%",
    maxWidth: 800,
    width: "100%",
    paddingLeft: 16,
    paddingRight: 16,
    margin: "0 auto"
  }
};

class SearchPage extends Component {
  // или componentWillMount
  componentDidMount() {
    const { search, searchMovies } = this.props;

    if (search) {
      searchMovies(search);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.search && nextProps.search !== this.props.search) {
      this.props.searchMovies(nextProps.search);
    }
  }

  handleSearch = (search) => {
    const { push, location } = this.props;

    push({
      pathname: location.pathname,
      query: { ...location.query, search }
    });
  };

  render() {
    const { search, loading, movies, moviesCount, voteAverage } = this.props;
    return (
      <div>
        <SearchBox search={search} onSearch={this.handleSearch} />
        <div style={styles.container}>
          <Loader loading={loading}>
            {!!movies.length && (
              <div>
                <p>Found {moviesCount} movies</p>
                <p>Vote average {Math.round(voteAverage * 100) / 100}</p>
              </div>
            )}
            <MovieGrid movies={movies} />
          </Loader>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    movies: getSearchMoviesSelector(state),
    moviesCount: getSearchMoviesCountSelector(state),
    voteAverage: getSearchMoviesVoteAverageSelector(state),
    loading: isSearchMoviesFetchingSelector(state),
    search: getMoviesSearchQuerySelector(state)
  };
}

export default connect(
  mapStateToProps,
  { searchMovies, push }
)(SearchPage);
