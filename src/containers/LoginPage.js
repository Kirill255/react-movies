import React, { Component } from "react";
import { connect } from "react-redux";
import { replace } from "connected-react-router";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";

import { auth } from "../actions";

const styles = {
  container: {
    height: "100%",
    width: "100%",
    padding: 16
  },
  card: {
    padding: 16,
    maxWidth: 500,
    margin: "0 auto"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  error: {
    color: "red",
    fontWeight: "bold"
  }
};

class LoginPage extends Component {
  state = {
    login: "",
    password: ""
  };

  componentWillMount() {
    if (this.props.isLoggedIn) {
      this.redirectAuthentificatedUser(this.props);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isLoggedIn) {
      this.redirectAuthentificatedUser(nextProps);
    }
  }

  redirectAuthentificatedUser = (props) => {
    if (props.nextLocation) {
      this.props.replace(props.nextLocation);
    } else {
      this.props.replace("/movies");
    }
  };

  handleLoginChange = (e) => {
    this.setState({
      login: e.target.value
    });
  };

  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value
    });
  };

  handleLogIn = () => {
    this.props.auth(this.state.login, this.state.password);
  };

  render() {
    const { error } = this.props;

    return (
      <div style={styles.container}>
        <Card style={styles.card} raised>
          <h2>Log in</h2>
          <form style={styles.form}>
            <TextField
              fullWidth
              label="Login"
              placeholder="Enter login"
              value={this.state.login}
              onChange={this.handleLoginChange}
              variant="outlined"
              margin="dense"
            />

            <TextField
              fullWidth
              type="password"
              label="Password"
              placeholder="Enter password"
              value={this.state.password}
              onChange={this.handlePasswordChange}
              variant="outlined"
              margin="dense"
            />

            <br />

            {error && <p style={styles.error}>{error}</p>}

            <Button fullWidth variant="contained" color="primary" onClick={this.handleLogIn}>
              Log in
            </Button>
          </form>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggingIn: state.session.isLoggingIn,
    isLoggedIn: state.session.isLoggedIn,
    error: state.session.error,
    nextLocation: state.router.location.state && state.router.location.state.nextLocation
  };
};

export default connect(
  mapStateToProps,
  { auth, replace }
)(LoginPage);
