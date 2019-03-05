import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import AddTask from './components/AddTask.js';
import Tasks from './components/Tasks.js';
import SomeFunction from './components/NonProject.js';

class App extends Component {
  render() {
    return (
      <div class="App">
        <Header />
        <AddTask />
        <Tasks />

        <input type="submit" value="Check All" />
        <input type="submit" value="Uncheck All" />

        {/*<SomeFunction />*/}
      </div>
    );
  }
}

export default App;
