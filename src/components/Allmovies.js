import React from "react";
import { Link } from "react-router-dom";

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: 30,
    justifyContent: "center"
  },
  movie: {
    maxWidth: 200,
    maxHeight: 200,
    position: "relative"
  },
  movie_img: {
    width: "100%",
    height: "100%"
  },
  movie_title: {
    position: "absolute",
    width: "100%",
    padding: 8,
    bottom: 0,
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    color: "#fff",
    fontWeight: "bold"
  }
};

const Allmovies = (props) => {
  const moviesList = props.movies.map((movie) => {
    const imgUrl = movie.posterPath
      ? `https://image.tmdb.org/t/p/w780${movie.posterPath}`
      : "/img/no-poster.jpg"; // movie.backdropPath
    return (
      <Link to={`/movies/${movie.id}`} key={movie.id} style={styles.movie}>
        <img className="user__avatar" src={imgUrl} alt="" style={styles.movie_img} />
        <div style={styles.movie_title}>
          <div> {movie.title} </div>
        </div>
      </Link>
    );
  });

  return <div style={styles.container}>{moviesList}</div>;
};

export default Allmovies;
