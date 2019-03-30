import React, { Component } from "react";
import { connect } from "react-redux";

import Loader from "../components/Loader";
import AllMovies from "../components/Allmovies";

import { fetchPopularMovies } from "../actions";

const styles = {
  container: {
    maxWidth: 1000,
    width: "100%",
    margin: "0 auto"
  }
};

class PopularMoviesPage extends Component {
  componentDidMount() {
    this.props.fetchPopularMovies();
  }

  render() {
    return (
      <div style={styles.container}>
        <h2>PopularMovies</h2>
        <Loader loading={this.props.loading}>
          <AllMovies movies={this.props.movies} />
        </Loader>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  console.log(ownProps);
  return {
    movies: state.allmovies.popular || [],
    loading: state.allmovies.isFetching
  };
}

export default connect(
  mapStateToProps,
  { fetchPopularMovies }
)(PopularMoviesPage);
