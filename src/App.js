import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    value: '',
    lastKeyPress: undefined,
  };

  onInputChange = ({target}) => {
    const { value } = target;
    this.setState({value});
  };

  onKeyPress = ({charCode}) => {
    this.setState({lastKeyPress: String.fromCharCode(charCode)});
  }

  render() {
    return (
      <div className="App">
        <input
          placeholder='Start typing'
          value={this.state.value}
          onChange={this.onInputChange}
          onKeyPress={this.onKeyPress}
          />
        <div>
          <p>Last key pressed was: {this.state.lastKeyPress}</p>
        </div>
      </div>
    );
  }
}

export default App;
