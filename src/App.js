import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import AddTask from './AddTask.js';
import Tasks from './Tasks.js';

class App extends Component {
  render() {
    return (
      <div class="App">
        <Header />
        <AddTask />
        <Tasks />

        <input type="submit" value="Check All" />
        <input type="submit" value="Uncheck All" />

        
      </div>
    );
  }
}

export default App;
