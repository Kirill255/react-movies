import React from "react";
import Paper from "@material-ui/core/Paper";

const styles = {
  container: {
    width: "100%",
    maxWidth: 800,
    margin: "0 auto",
    display: "flex"
  },
  img: {
    height: 450
  },
  info: {
    marginLeft: 36,
    padding: 16
  },
  title: {
    fontWeight: 500
  },
  subtitle: {
    fontWeight: 500
  }
};

const MovieInfo = (props) => {
  const imgUrl = props.posterPath
    ? `https://image.tmdb.org/t/p/w500${props.posterPath}`
    : "/img/no-poster.jpg";

  return (
    <Paper style={styles.container}>
      <img style={styles.img} src={imgUrl} alt="" />

      <div style={styles.info}>
        <h1 style={styles.title}>{props.title}</h1>

        <p>{props.overview || "No overview"}</p>
      </div>
    </Paper>
  );
};

export default MovieInfo;
