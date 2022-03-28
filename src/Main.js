import React, { Component } from "react";

class Main extends Component {
  state = {
    counter: 8888,
  };

  addOnehandler = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };
  addFivehandler = () => {
    this.setState({
      counter: this.state.counter + 5,
    });
  };
  resthandler = () => {
    this.setState({
      counter: 0,
    });
  };
  removeOnehandler = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
  };
  removeFivehandler = () => {
    this.setState({
      counter: this.state.counter - 5,
    });
  };

  render() {
    return (
      <main id="main">
        <div id="circle-container">
          <div id="circle">
            <p id="number">{this.state.counter}</p>
          </div>
        </div>

        <div id="button-container">
          <button className="button" onClick={this.addFivehandler}>
            Add five
          </button>
          <button className="button" onClick={this.addOnehandler}>
            Add one
          </button>
          <button className="button" onClick={this.resthandler}>
            Rest
          </button>
          <button className="button" onClick={this.removeOnehandler}>
            Remove one
          </button>
          <button className="button" onClick={this.removeFivehandler}>
            Remove five
          </button>
        </div>
      </main>
    );
  }
}

export default Main;
