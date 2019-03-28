import React, { Component } from 'react'
import './App.css'
import Header from './components/Header/Header'
import AddTask from './components/AddTask/AddTask'
import ToDoItem from './components/ToDoItem/ToDoItem'
import Filters from './components/Filters/Filters'
import Sort from './components/Sort/Sort.js'
import defaultItems from './defaultItems.js'


class App extends Component {
	state = {
		tasks: [],
		checkedTasks: [],
		currentPage: 1,
		showRules: 'all',
		isDateSorted: false
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
					updatedTasks.push(task)
					console.log(updatedTasks)
				}
				return task
			})
			return {
				checkedTasks: updatedTasks
			}
		})
		console.log(this.state.checkedTasks)
	}


	/*onCheckAll = (item) => {
		const checkedTasks = [...this.state.tasks]
		checkedTasks.forEach((item,i) => {
			this.props.checked = true
		})
		this.setState({
			checkedTasks: checkedTasks
		})
		console.log(this.state.checkedTasks)
	}*/

	onUncheckAll = (item) => {
		const checkedTasks = [...this.state.tasks]
		checkedTasks.forEach((item,i) => {
			this.props.checked = false
		})
		this.setState({
			checkedTasks: checkedTasks
		})
		console.log(this.state.checkedTasks)
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

	onChange = (item, editedTitle) => {
		this.setState(prevState => {
			const editedTasks = prevState.tasks.map(task => {
				if (task.date === item.date) {
					task.title = editedTitle
					console.log(task)
				}
				return task
			})
			return {
				tasks: editedTasks
			}
		})
	}

	changeSortOrder = () => {
		this.setState(prevState => {
			return {isDateSorted: !prevState.isDateSorted}
		})
		this.setState({
			showRules: 'date'
		})
	}

	changeCurrentPage = (page) => {
		this.setState({
			currentPage: page
		})
	}

	filterActive = () => {
		this.setState({
			showRules: 'active'
		})
	}

	filterCompleted = () => {
		this.setState({
			showRules: 'completed'
		})
	}

	showAll = () => {
		this.setState({
			showRules: 'all'
		})
	}

	sortDate = () => {
		this.setState({
			showRules: 'date'
		})
	}

	sortAlphabet = () => {
		this.setState({
			showRules: 'alpha'
		})
	}

	render() {

		const {
			tasks,
			currentPage,
			showRules,
			isDateSorted
		} = this.state;

		let filteredItems = []
		if (showRules === 'active') {
			filteredItems = tasks.filter(item => item.completed === false)
		} else if (showRules === 'completed') {
			filteredItems = tasks.filter(item => item.completed === true)
		} else {
			filteredItems = tasks.slice()
		}

    	let sortedItems = []
    	if (showRules === 'date') {
	    	let sortedDateItems = []

			if (isDateSorted) {
				sortedDateItems = filteredItems.sort((a, b) => a.date - b.date > 0 ? -1 : 1)
			} else {
				sortedDateItems = filteredItems.sort((a, b) => b.date - a.date > 0 ? -1 : 1)
			}

			sortedItems = sortedDateItems.slice()

    	} else if (showRules === 'alpha') {
    		let sortedAlphabetItems = []

    		sortedAlphabetItems = filteredItems.sort((a, b) => {
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
	        sortedItems = sortedAlphabetItems.slice()
    	} else {
    		sortedItems = filteredItems.slice()
    	}

		let paginatedItems = []
		if (currentPage === 2) {
			paginatedItems = sortedItems.slice(10,20)
		} else if (currentPage === 3) {
			paginatedItems = sortedItems.slice(20,30)
		} else {
			paginatedItems = sortedItems.slice(0,10)
		}


// 1. sort. items -> sortedItems(this.state.isSorted, items)
// 2. filter -> sortedItems -> filteredtems(true/false)
// 3. paginate -> filteredItems -> paginatedItems(currentPage/1/2/3)

		let items = [];
			
				items = paginatedItems.map(item => <ToDoItem
			tasks={tasks} 
			key={item.date}
			item={item}
			onCheck={this.onCheck}
			onDelete={this.onDelete}
			onComplete={this.onComplete}
			onChange={this.onChange}
			/>)

		return (
			<div className="app">
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
				isDateSorted={isDateSorted}
				showAll={this.showAll}
				filterCompleted={this.filterCompleted}
				filterActive={this.filterActive}
				changeSortOrder={this.changeSortOrder}
				sortDate={this.sortDate}
				sortAlphabet={this.sortAlphabet}
				onClickSortDate={this.onClickSortDate}
				/>
				<ul className="todo-list">
		    	    {
		    	    	items.length > 0 
		    	    	? items
		    	    	: <h2> No tasks yet... </h2>
		    	    }
		    	</ul>
		    	<div className="pagination">
				<button onClick={() => this.changeCurrentPage(1)}> 1 </button>
				<button onClick={() => this.changeCurrentPage(2)}> 2 </button>
				<button onClick={() => this.changeCurrentPage(3)}> 3 </button>
			</div>
			</div>
		)
	}
}

export default App


/*{ items.length > 10
		    	  ? <button onClick={() => this.changeCurrentPage(1)}> 1 </button>
		    	  <button onClick={() => this.changeCurrentPage(2)}> 2 </button>
		    	  : <div></div>
		    	}*/