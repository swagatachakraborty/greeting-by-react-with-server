import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("I'm clicked");
  }

  render() {
    return (
      <main>
        <div className="input-section">
          <h2>Enter something</h2>
          <input name="Some-thing" />
          <button onClick={this.handleClick}> Submit</button>
        </div>

        <div className="output-section">
          <h2>Output</h2>
          <div className="display" />
        </div>
      </main>
    );
  }
}

export default App;
