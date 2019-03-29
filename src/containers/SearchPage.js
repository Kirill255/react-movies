import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";

import { searchMovies } from "../actions";

import SearchBox from "../components/SearchBox";
import Loader from "../components/Loader";
import MovieGrid from "../components/MovieGrid";

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
    console.log(this.props);
    const { search, loading, movies } = this.props;
    return (
      <div>
        <SearchBox search={search} onSearch={this.handleSearch} />
        <div style={styles.container}>
          <Loader loading={loading}>
            <MovieGrid movies={movies} />
          </Loader>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  console.log(ownProps);
  return {
    movies: state.movies.items,
    loading: state.movies.isFetching,
    search: state.router.location.query.search
  };
}

export default connect(
  mapStateToProps,
  { searchMovies, push }
)(SearchPage);
