import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import AddTask from './components/AddTask'
import ToDoItem from './components/ToDoItem'
import Filters from './components/Filters'
import Sort from './components/Sort'


class App extends Component {
	state = {
		tasks: [],
		allTasks: []
	}

	addTask = newTask => {
		const newList = this.state.tasks;
		 newList.push(newTask);
		this.setState({
			tasks: newList,
			allTasks: newList
		})
		console.log(this.state.allTasks)
	}

	onCheck = (date) => {
		this.setState(prevState => {
			const updatedTasks = prevState.tasks.map(task => {
				if (task.date === date) {
					task.completed = !task.completed
					console.log(task)
				}
				return task
			})
			return {
				tasks: updatedTasks
			}
		})
	}

	onCheckAll = () => {
		const checkedTasks = [...this.state.tasks]
		checkedTasks.forEach((item,i) => {
			checkedTasks[i].completed = true
		})
		this.setState({
			tasks: checkedTasks
		})
		console.log(this.state)
	}

	onUncheckAll = () => {
		const checkedTasks = [...this.state.tasks]
		checkedTasks.forEach((item,i) => {
			checkedTasks[i].completed = false
		})
		this.setState({
			tasks: checkedTasks
		})
		console.log(this.state)
	}

	deleteSelected = (completed) => {
		const leftTasks = this.state.tasks.filter(task => task.completed !== true)
		this.setState({
			tasks: leftTasks
		}) 
	}

	onDelete = (date) => {
		const newTasks = this.state.tasks.filter(task => task.date !== date)
		this.setState({
			tasks: newTasks
		})
	}

	onShowAll = () => {
		const allTasks = this.state.allTasks.map()
		this.setState({
			tasks: allTasks
		})
	}

	onShowActive = (completed) => {
		const activeTasks = this.state.tasks.filter(task => task.completed === false)
		this.setState({
			tasks: activeTasks
		})
	}

	onShowCompleted = (completed) => {
		const completedTasks = this.state.tasks.filter(task => task.completed === true)
		this.setState({
			tasks: completedTasks
		})
	}


	render() {

		const toDoItems = this.state.tasks.map(item => <ToDoItem 
			key={item.date}
			date={item.date}
			text={item.title}
			completed={item.completed}
			onCheck={this.onCheck}
			onDelete={this.onDelete}
			/>)

		return (
			<div className="App">
				<Header />
				<Filters 
				onCheckAll={this.onCheckAll}
				onUncheckAll={this.onUncheckAll}
				deleteSelected={this.deleteSelected}
				/>
				<AddTask 
				onCreate={this.addTask} 
				/>
				<Sort 
				onShowAll={this.onShowAll}
				onShowActive={this.onShowActive}
				onShowCompleted={this.onShowCompleted}
				/>
				<div className="todo-list">
            		{toDoItems}
        		</div>      
			</div>
		)
	}
}

export default App
