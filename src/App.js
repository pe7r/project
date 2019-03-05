import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import AddTask from './components/AddTask.js';
import ToDoList from './components/ToDoList.js';
import SomeFunction from './components/NonProject/NonProject.js';

class App extends Component {
  render() {
    return (
      <div class="App">
        <Header />
        <AddTask />
        <ToDoList />

        <input type="submit" value="Check All" />
        <input type="submit" value="Uncheck All" />

        
        <SomeFunction />
        <SomeFunction />
        
      </div>
    );
  }
}

export default App;
