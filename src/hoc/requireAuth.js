import React, { Component } from "react";
import { connect } from "react-redux";
import { replace } from "connected-react-router";

import { isLoggedInSelector } from "../selectors";

const mapStateToProps = (state) => {
  return {
    isLoggedIn: isLoggedInSelector(state),
    pathname: state.router.location.pathname,
    query: state.router.location.query
  };
};

export default function requireAuth(OriginComponent) {
  class AuthentificatedComponent extends Component {
    componentWillMount() {
      this.checkAuth(this.props);
    }

    componentWillReceiveProps(nextProps) {
      this.checkAuth(nextProps);
    }

    checkAuth = (props) => {
      if (!props.isLoggedIn) {
        props.replace({
          pathname: "/login",
          state: {
            nextLocation: {
              pathname: props.pathname,
              query: props.query
            }
          }
        });
      }
    };

    render() {
      const { isLoggedIn, ...otherProps } = this.props;

      return isLoggedIn ? <OriginComponent {...otherProps} /> : null;
    }
  }

  return connect(
    mapStateToProps,
    { replace }
  )(AuthentificatedComponent);
}
