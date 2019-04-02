import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, NavLink } from "react-router-dom";

import Button from "@material-ui/core/Button";
import MovieSimilarPage from "./MovieSimilarPage";
import MovieRecommendationsPage from "./MovieRecommendationsPage";
import MovieInfo from "../components/MovieInfo";
import BackdropContainer from "../components/BackdropContainer";
import Loader from "../components/Loader";

import { fetchMovie } from "../actions";
import { getMovieSelector, isMovieFetchingSelector, getMovieIdSelector } from "../selectors";

const styles = {
  actions: {
    display: "flex",
    justifyContent: "center",
    padding: 8
  },
  menu: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: 30,
    marginBottom: 30
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
    this.props.history.push({ pathname: "/movies" });
  };

  render() {
    const { movie, loading } = this.props;

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

        <div style={styles.menu}>
          <NavLink
            to={`${this.props.match.url}/recommendations`}
            activeStyle={{ color: "red", fontWeight: "bold", textDecoration: "none" }}
          >
            Recommendations
          </NavLink>
          <NavLink
            to={`${this.props.match.url}/similar`}
            activeStyle={{ color: "red", fontWeight: "bold", textDecoration: "none" }}
          >
            Similar
          </NavLink>
        </div>

        <Route
          path={`${this.props.match.path}/recommendations`}
          component={MovieRecommendationsPage}
        />
        <Route path={`${this.props.match.path}/similar`} component={MovieSimilarPage} />
      </Loader>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    movie: getMovieSelector(state),
    loading: isMovieFetchingSelector(state),
    movieId: getMovieIdSelector(state, ownProps)
  };
}

export default connect(
  mapStateToProps,
  { fetchMovie }
)(MoviePage);
