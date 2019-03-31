import React, { Component } from "react";
import { Route, /*  NavLink, */ Switch, Redirect } from "react-router-dom";

import SearchPage from "./containers/SearchPage";
import MoviePage from "./containers/MoviePage";
import PopularMoviesPage from "./containers/PopularMoviesPage";
import TopRatedMoviesPage from "./containers/TopRatedMoviesPage";
import NowPlayingPage from "./containers/NowPlayingPage";
import LoginPage from "./containers/LoginPage";
// import AboutPage from "./containers/AboutPage";
import requireAuth from "./hoc/requireAuth";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Redirect from="/" to="/movies" exact />
          <Route path="/login" component={LoginPage} />
          <Route path="/popular" component={requireAuth(PopularMoviesPage)} />
          <Route path="/toprated" component={requireAuth(TopRatedMoviesPage)} />
          <Route path="/nowplaying" component={requireAuth(NowPlayingPage)} />
          {/* <Route path="/movies" component={AboutPage} /> */}
          <Route path="/movies/:id" component={requireAuth(MoviePage)} />
          <Route path="/movies" component={requireAuth(SearchPage)} />
          {/* <Route path="/about" component={AboutPage} /> */}
          {/* <Route path="*" render={() => <h1>Not Found Page</h1>} /> */}
        </Switch>
      </div>
    );
  }
}

export default App;
