import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 6000);
  }
  render() {
    const { isLoading } = this.state;
    return (
      <div>
        <h1>{isLoading ? "Loading" : "we are ready"}</h1>
      </div>
    );
  }
}

export default App;
