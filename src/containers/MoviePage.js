import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import { fetchMovie } from "../actions";

import Button from "@material-ui/core/Button";
import MovieSimilarPage from "./MovieSimilarPage";
import MovieRecommendationsPage from "./MovieRecommendationsPage";
import MovieInfo from "../components/MovieInfo";
import BackdropContainer from "../components/BackdropContainer";
import Loader from "../components/Loader";

const styles = {
  actions: {
    display: "flex",
    justifyContent: "center",
    padding: 8
  }
};

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

  goBack = () => {
    this.props.history.goBack();
  };

  render() {
    const { movie, loading, children } = this.props;
    console.log("MoviePage: ", this.props);

    return (
      <Loader loading={loading}>
        <BackdropContainer backdropPath={movie.backdropPath}>
          <div style={styles.actions}>
            <Button variant="contained" color="primary" size="small" onClick={this.goBack}>
              Go Back
            </Button>
          </div>

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
