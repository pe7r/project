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
		checkedTasks: []
	}

	addTask = newTask => {
		const newList = this.state.tasks;
		 newList.push(newTask);
		this.setState({
			tasks: newList
		})
	}

	onCheck = (date) => {
		this.setState(prevState => {
			const updatedTasks = prevState.tasks.map(task => {
				if (task.date === date) {
					task.checked = !task.checked
					console.log(task)
				}
				return task
			})
			return {
				checkedTasks: updatedTasks
			}
		})
		console.log(this.state.checkedTasks)
	}

	onCheckAll = () => {
		const checkedTasks = [...this.state.tasks]
		checkedTasks.forEach((item,i) => {
			checkedTasks[i].checked = true
		})
		this.setState({
			tasks: checkedTasks
		})
		console.log(this.state)
	}

	onUncheckAll = () => {
		const checkedTasks = [...this.state.tasks]
		checkedTasks.forEach((item,i) => {
			checkedTasks[i].checked = false
		})
		this.setState({
			tasks: checkedTasks
		})
		console.log(this.state)
	}

	deleteSelected = (checked) => {
		const leftTasks = this.state.tasks.filter(task => task.checked !== true)
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

	onComplete = (date) => {
		this.setState(prevState => {
			const completedTasks = prevState.tasks.map(task => {
				if (task.date === date) {
					task.completed = !task.completed
					console.log(task)
				}
				return task
			})
			return {
				tasks: completedTasks
			}
		})
	}

/*	onShowAll = (title) => {
		const Alltasks = [...this.state.tasks]
		this.setState({
			tasks: Alltasks
		})
	}

	onShowActive = (completed) => {
		const activeTasks = this.state.tasks.filter(task => task.completed === false)
		this.setState({
			activeTasks: activeTasks
		})
	}

	onShowCompleted = (completed) => {
		const completedTasks = this.state.tasks.filter(task => task.completed === true)
		this.setState({
			completedTasks: completedTasks
		})
	}*/


	render() {

		const toDoItems = this.state.tasks.map(item => <ToDoItem 
			key={item.date}
			date={item.date}
			text={item.title}
			checked={item.checked}
			completed={item.completed}
			onCheck={this.onCheck}
			onDelete={this.onDelete}
			onComplete={this.onComplete}
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
