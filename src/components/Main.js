import React, { Component } from "react";
import Button from "./Button";

class Main extends Component {
  state = {
    counter: 2000,
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
  restHandler = () => {
    this.setState({
      counter: 0,
    });
  };
  removeOnehandler = () => {
    if (this.state.counter > 0)
      this.setState({
        counter: this.state.counter - 1,
      });
  };
  removeFivehandler = () => {
    if (this.state.counter > 4)
      this.setState({
        counter: this.state.counter - 5,
      });
  };

  render() {
    let classStyle = "circle";

    if (this.state.counter % 2 == 0) {
      classStyle += "even";
    } else {
      classStyle += "odd";
    }

    return (
      <main id="main">
        <div id="circle-container">
          <div id="circle">
            <p id="number">{this.state.counter}</p>
          </div>
        </div>

        <Button click={this.addFivehandler} value="Add five" type="primary" />
        <Button click={this.addOnehandler} value="Add one" type="primary" />
        <Button click={this.restHandler} value="Rest" type="secondary" />
        <Button
          click={this.removeOnehandler}
          value="Remove one"
          type="primary"
        />
        <Button
          click={this.removeFivehandler}
          value="Remove five"
          type="primary"
        />
      </main>
    );
  }
}

export default Main;
