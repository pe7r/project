import React, { Component } from 'react'
import './App.css'
import Header from './components/Header.js'
import AddTask from './components/AddTask.js'
import ToDoList from './components/ToDoList.js'
import ProductList from './components/ProductList.js'
/*import Joke from './components/NonProject/NonProject.js'
import jokesData from "./jokesData"*/

class App extends Component {
  render() {

    /*const jokeComponents = jokesData.map(joke => <Joke key={joke.id} question={joke.question} punchline={joke.punchline} />)*/

    return (
      <div className="App">
        <Header />
        <AddTask />
        <ToDoList />
        {/*<ProductList />*/}

        {/*<div>
            {jokeComponents}
        </div>*/}
        
      </div>
    )
  }
}

export default App
