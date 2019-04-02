import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import Loader from "../components/Loader";

import { fetchSimilarMovie } from "../actions";

const styles = {
  container: {
    height: "100%",
    maxWidth: 600,
    width: "100%",
    paddingLeft: 16,
    paddingRight: 16,
    margin: "0 auto"
  },
  containerGrid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: "rgba(255, 255, 255, 0.54)"
  },
  gridList: {
    width: 600,
    height: 450
  }
};

class MovieSimilarPage extends Component {
  componentDidMount() {
    this.props.fetchSimilarMovie(this.props.match.params.id);
  }

  render() {
    return (
      <div>
        <div style={styles.container}>
          <h1>Similar Movies</h1>
          <Loader loading={this.props.loading}>
            <div style={styles.containerGrid}>
              <GridList cellHeight={180} style={styles.gridList}>
                {this.props.similarMovies.map((movie) => (
                  <Link to={`/movies/${movie.id}`} key={movie.id}>
                    <GridListTile>
                      {movie.backdropPath ? (
                        <img
                          src={`https://image.tmdb.org/t/p/w300${movie.backdropPath}`}
                          alt={movie.title}
                        />
                      ) : (
                        <img src="/img/no-backdrop.jpeg" alt={movie.title} />
                      )}
                      <GridListTileBar title={movie.title} />
                    </GridListTile>
                  </Link>
                ))}
              </GridList>
            </div>
          </Loader>
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    loading: state.relatedmovies.isFetching,
    similarMovies: state.relatedmovies.similar
  }),
  { fetchSimilarMovie }
)(MovieSimilarPage);
