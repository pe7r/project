import React, { Component } from 'react'
import './App.css'
import Header from './components/Header.js'
import AddTask from './components/AddTask.js'
import ToDoList from './components/ToDoList.js'


class App extends Component {
	state = {
		listOfTasks: []
	}

	addNewTaskToList = newTask => {
		this.setState({
			listOfTasks: [...this.state.listOfTasks, newTask]
		})
		console.log(this.state.listOfTasks)
	}

	render() {
		return (
			<div className="App">
				<Header />
				<AddTask handlerFromParentAddNewTask={this.addNewTaskToList} />
				<ToDoList 
				listOfTasks={this.state.listOfTasks}
				/>      
			</div>
		)
	}
}

export default App
