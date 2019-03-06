import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import AddTask from './components/AddTask.js';
import ToDoList from './components/ToDoList.js';
import Joke from './components/NonProject/NonProject.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <AddTask />
        <ToDoList />

        
        <Joke        
          question="What did the red light say to the green light?"
          punchline="Don’t look, I’m changing."
        />
        <Joke         
          question="Did you hear about the mathematician who’s afraid of negative numbers?"
          punchline="He’ll stop at nothing to avoid them."            
        />
        <Joke         
          question="Did you hear about the claustrophobic astronaut?"
          punchline="He just needed a little space."            
        />
        <Joke         
          question="Why did the computer show up at work late?"
          punchline="It had a  hard drive."            
        />
        <Joke         
          question="What did sushi A say to sushi B?"
          punchline="Wasabi!"            
        />

      </div>
    );
  }
}

export default App;
