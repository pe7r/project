import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import AddTask from './components/AddTask.js';
import ToDoList from './components/ToDoList.js';
import SomeFunction from './components/NonProject/NonProject.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <AddTask />
        <ToDoList />

        <input type="submit" value="Check All" />
        <input type="submit" value="Uncheck All" />

        
        <SomeFunction 
               contact = {{
                name: "Mr. Whiskerson",
                imgUrl: "http://placekitten.com/300/200", 
                phone: "(212) 555-1234", 
                email: "mr.whiskaz@catnap.meow",
                favouriteFood: "McDonalds"
               }}

               info = {{
                adress: "Somewhere near McDonalds",
                hobby: "sleep"
               }}
        />
        <SomeFunction
                contact = {{
                name: "Fluffykins", 
                imgUrl: "http://placekitten.com/400/200", 
                phone: "(212) 555-2345", 
                email: "fluff@me.com",
                favouriteFood: "Hello Burger"
                }}

                info = {{
                adress: "Somewhere over the Rainbow",
                hobby: "eat"
               }}
         />

      </div>
    );
  }
}

export default App;
