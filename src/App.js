import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(...args) {
    super(...args);

    this.state = {
      value: '',
    };
  }

  onInputChange = ({target}) => {
    const { value } = target;
    this.setState({value});
  };

  render() {
    return (
      <div className="App">
        <input
          placeholder='Start typing'
          value={this.state.value}
          onChange={this.onInputChange}
          />
      </div>
    );
  }
}

export default App;
