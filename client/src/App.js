import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      display: ''
    };
  }

  handleClick() {
    const name = document.getElementsByName('name')[0].value;
    document.getElementsByName('name')[0].value = '';
    fetch('/update', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ name })
    })
      .then(res => res.text())
      .then(res => this.setState({ display: res }));
  }

  render() {
    return (
      <main>
        <div className="input-section">
          <h2>Enter name : </h2>
          <input name="name" />
          <button onClick={this.handleClick}> Submit</button>
        </div>

        <div className="output-section">
          <h2>Output</h2>
          <div className="display">{this.state.display}</div>
        </div>
      </main>
    );
  }
}

export default App;
