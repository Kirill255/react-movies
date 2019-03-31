import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";

import { restoreAuth } from "./actions";
import { extractSession } from "./utils/session";

import App from "./App";

import store from "./store";
import history from "./history";

import "modern-normalize";
import "./assets/main.css";

import * as serviceWorker from "./serviceWorker";

const renderApp = () => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>,
    document.getElementById("root")
  );
};

const startApp = () => {
  const session = extractSession();

  if (session) {
    store.dispatch(restoreAuth(session)).then(() => renderApp());
  } else {
    renderApp();
  }
};

startApp();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
