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

        <input type="submit" value="Check All" />
        <input type="submit" value="Uncheck All" />

        
        <Joke        
          question="Q: What did the red light say to the green light?"
          punchline="A: Don’t look, I’m changing."
        />
        <Joke         
          question="Q: Did you hear about the mathematician who’s afraid of negative numbers?"
          punchline="A: He’ll stop at nothing to avoid them."            
         />
        <Joke         
          question="PATIENT: Doctor, I need your help. I’m addicted to checking my Twitter!"
          punchline="DOCTOR: I’m so sorry, I don’t follow."            
         />
        <Joke         
          question="Q: Why did the computer show up at work late?"
          punchline="A: It had a  hard drive."            
         />

      </div>
    );
  }
}

export default App;
