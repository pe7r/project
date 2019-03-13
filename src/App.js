import React, { Component } from 'react'
import './App.css'
import Header from './components/Header.js'
import AddTask from './components/AddTask.js'
import ToDoItem from './components/ToDoItem'

class App extends Component {
	state = {
		listOfTasks: []
	}

	addTask = newTask => {
		const newList = this.state.listOfTasks;
		 newList.push(newTask);
		this.setState({
			listOfTasks: newList
		})
		console.log(this.state.listOfTasks)
	}

	render() {

		const toDoItems = this.state.listOfTasks.map(item => <ToDoItem 
			key={item.date}
			date={item.date}
			text={item.title}
			completed={item.completed}
			/>)

		return (
			<div className="App">
				<Header />
				<AddTask onCreate={this.addTask} />
				<div className="todo-list">
            	{toDoItems}
        		</div>      
			</div>
		)
	}
}

export default App
