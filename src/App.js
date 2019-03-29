import React, { Component } from "react";
import { Route, /*  NavLink, */ Switch, Redirect } from "react-router-dom";

import SearchPage from "./containers/SearchPage";
import MoviePage from "./containers/MoviePage";
// import AboutPage from "./containers/AboutPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Redirect from="/" to="/movies" exact />
          {/* <Route path="/movies" component={AboutPage} /> */}
          <Route path="/movies/:id" component={MoviePage} />
          <Route path="/movies" component={SearchPage} />
          {/* <Route path="/about" component={AboutPage} /> */}
          {/* <Route path="*" render={() => <h1>Not Found Page</h1>} /> */}
        </Switch>
      </div>
    );
  }
}

export default App;
