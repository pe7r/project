import React, { Component } from 'react'
import './App.css'
import Header from './components/Header.js'
import AddTask from './components/AddTask.js'
import ToDoItem from './components/ToDoItem'

class App extends Component {
	state = {
		tasks: []
	}

	addTask = newTask => {
		const newList = this.state.tasks;
		 newList.push(newTask);
		this.setState({
			tasks: newList
		})
		console.log(this.state.tasks)
	}

	onCheck = (date) => {
		this.setState(prevState => {
			const updatedTasks = prevState.tasks.map(task => {
				if (task.date === date) {
					task.completed = !task.completed
				}
				console.log(task)
				return task
			})
			return {
				tasks: updatedTasks
			}
		})
	}

	render() {

		const toDoItems = this.state.tasks.map(item => <ToDoItem 
			key={item.date}
			date={item.date}
			text={item.title}
			completed={item.completed}
			onCheck={this.onCheck}
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
