import React, { Component } from 'react'
import './App.css'
import Header from './components/Header/Header'
import AddTask from './components/AddTask/AddTask'
import ToDoItem from './components/ToDoItem/ToDoItem'
import Filters from './components/Filters/Filters'
import Sort from './components/Sort/Sort.js'


class App extends Component {
	state = {
		tasks: [],
		sortedTasks: [],
		showSortedTasks: false
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

	setSorted = sorted => {
		this.setState({
			showSortedTasks: sorted
		})
	}

	addSortedTasks = sortedTasks => {
		console.log(sortedTasks)
		this.setState({
			sortedTasks: sortedTasks
		})
		this.setSorted(true)
	}

	activeSort = (item) => {
		let newTasks = this.state.tasks.filter(item => item.completed === false )
		this.addSortedTasks(newTasks)
	}

	completedSort = (item) => {
		let newTasks = this.state.tasks.filter(item => item.completed === true )
		this.addSortedTasks(newTasks)
	}

	titleSort = (item) => {
        const newTasks = this.state.tasks.sort((a, b) => {
            let taskA = a.title.toUpperCase()
            let taskB = b.title.toUpperCase()
                 if (taskA < taskB) {
                   return -1
                 }
                 if (taskA > taskB) {
                   return 1
                 }
                 return 0
            })
        this.addSortedTasks(newTasks)
    }

    dateSort = (item) => {
    	const newTasks = this.state.tasks.sort((a, b) => a.date - b.date)
    	this.addSortedTasks(newTasks)
    }

	render() {

		let items = [];
			if (this.state.showSortedTasks) {
				items = this.state.sortedTasks.map(item => <ToDoItem 
			key={item.date}
			item={item}
			onCheck={this.onCheck}
			onDelete={this.onDelete}
			onComplete={this.onComplete}
			/>)
			} else {
				items = this.state.tasks.map(item => <ToDoItem 
			key={item.date}
			item={item}
			onCheck={this.onCheck}
			onDelete={this.onDelete}
			onComplete={this.onComplete}
			/>)
			}


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
				completedSortFromParent={this.completedSort}
				activeSortFromParent={this.activeSort}
				showAllFromParent={() => this.setSorted(false)}
				titleSortFromParent={this.titleSort}
				dateSortFromParent={this.dateSort}
				/>
				<ul className="todo-list">
	        {items}
	    	</ul>      
			</div>
		)
	}
}

export default App
