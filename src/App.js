import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    count: 0
  };
  plus = () => {
    console.log("Plus");
  };
  minus = () => {
    console.log("Minus");
  };
  render() {
    return (
      <div>
        <h1>the NUMBER ISSSSSS: {this.state.count}</h1>
        <button onClick={this.plus}>Plus</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
