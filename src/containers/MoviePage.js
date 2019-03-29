import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import { fetchMovie } from "../actions";

import MovieSimilarPage from "./MovieSimilarPage";
import MovieRecommendationsPage from "./MovieRecommendationsPage";
import MovieInfo from "../components/MovieInfo";
import BackdropContainer from "../components/BackdropContainer";
import Loader from "../components/Loader";

class MoviePage extends Component {
  componentWillMount() {
    const { movieId } = this.props;

    this.props.fetchMovie(movieId);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.movieId !== this.props.movieId) {
      this.props.fetchMovie(nextProps.movieId);
    }
  }

  render() {
    const { movie, loading, children } = this.props;
    console.log(this.props);

    return (
      <Loader loading={loading}>
        <BackdropContainer backdropPath={movie.backdropPath}>
          <MovieInfo {...movie} />
        </BackdropContainer>

        {children}

        <Route path="recommendations" component={MovieRecommendationsPage} />
        <Route path="similar" component={MovieSimilarPage} />
      </Loader>
    );
  }
}

function mapStateToProps(state, ownProps) {
  console.log(ownProps);
  return {
    movie: state.movie.info,
    loading: state.movie.isFetching,
    movieId: ownProps.match.params.id
  };
}

export default connect(
  mapStateToProps,
  { fetchMovie }
)(MoviePage);
