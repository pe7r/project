import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';

class App extends Component {
  render() {
    return (
      <div class="App">
        <Header />

        <input type="text" />
        <input type="submit" value="Add" onclick="" />

        <input type="submit" value="Check All" />
        <input type="submit" value="Uncheck All" />

        <input type="checkbox" />
        <input type="text" />
      </div>
    );
  }
}

export default App;
