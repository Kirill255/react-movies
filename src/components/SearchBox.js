import React, { Component } from "react";

import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

const styles = {
  container: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    padding: "8px 16px"
  },
  field: {
    fontSize: 22
  },
  button: {
    marginLeft: 16
  }
};

export default class SearchBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: this.props.search || ""
    };
  }

  handleTextChange = (e) => {
    this.setState({
      text: e.target.value
    });
  };

  handleSearch = () => {
    const { text } = this.state;

    this.props.onSearch(text);
  };

  render() {
    const { text } = this.state;

    return (
      <Paper style={styles.container}>
        <TextField
          fullWidth
          InputProps={{
            disableUnderline: true
          }}
          style={styles.field}
          label="Search"
          value={text}
          onChange={this.handleTextChange}
        />
        <Button
          variant="contained"
          color="primary"
          disabled={!text}
          style={styles.button}
          onClick={this.handleSearch}
        >
          Search
        </Button>
      </Paper>
    );
  }
}
