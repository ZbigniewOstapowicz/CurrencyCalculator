import React, { Component } from "react";
import Select from "./Select";
import "../style/App.css";
class App extends Component {
  state = {
    currency: ""
  };

  handelSelect = e => {
    this.setState({
      currency: e.target.value
    });
  };
  render() {
    return (
      <div className="App">
        <Select onChange={this.handelSelect} value={this.currency}></Select>
      </div>
    );
  }
}

export default App;
