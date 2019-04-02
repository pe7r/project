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
		tasks: defaultItems,
		checkedTasks: [],
		currentPage: 1,
		filterRules: 'all',
		isDateSorted: false,
		isAlpha: false,
		sortRules: null
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
		this.sortDate()
	}

	alphabetOrder = () => {
		this.setState(prevState => {
			return {isAlpha: !prevState.isAlpha}
		})
		this.setState({
			sortRules: 'alpha',
			currentPage: 1
		})
	}

	changeCurrentPagePrev = () => {
		this.setState(prevState => {
			return {currentPage: prevState.currentPage - 1}
		})
	}

	changeCurrentPageNext = () => {
		this.setState(prevState => {
			return {currentPage: prevState.currentPage + 1}
		})
	}

	filterActive = () => {
		this.setState({
			filterRules: 'active',
			currentPage: 1
		})
	}

	filterCompleted = () => {
		this.setState({
			filterRules: 'completed',
			currentPage: 1
		})
	}

	showAll = () => {
		this.setState({
			filterRules: 'all',
			currentPage: 1
		})
	}

	sortDate = () => {
		this.setState({
			sortRules: 'date',
			currentPage: 1
		})
	}

	getSelectValue = () => {
		let selectedValue = document.getElementById('list');
		console.log(selectedValue.ref)
	}

	render() {

		const {
			tasks,
			currentPage,
			filterRules,
			isDateSorted,
			isAlpha,
			sortRules
		} = this.state;

		let filteredItems = []
		if (filterRules === 'active') {
			filteredItems = tasks.filter(item => item.completed === false)
		} else if (filterRules === 'completed') {
			filteredItems = tasks.filter(item => item.completed === true)
		} else {
			filteredItems = tasks.slice()
		}

    	let sortedItems = []
    	if (sortRules === 'date') {
	    	let sortedDateItems = []

			if (isDateSorted) {
				sortedDateItems = filteredItems.sort((a, b) => a.date - b.date > 0 ? -1 : 1)
			} else {
				sortedDateItems = filteredItems.sort((a, b) => b.date - a.date > 0 ? -1 : 1)
			}

			sortedItems = sortedDateItems.slice()

    	} else if (sortRules === 'alpha') {
    		let sortedAlphabetItems = []

    		if (isAlpha) {
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
    		} else {
    			sortedAlphabetItems = filteredItems.sort((a, b) => {
			        let taskA = a.title.toUpperCase()
			        let taskB = b.title.toUpperCase()
		             if (taskB < taskA) {
		               return -1
		             }
		             if (taskB > taskA) {
		               return 1
		             }
		             return 0
		        })
    		}
	        sortedItems = sortedAlphabetItems.slice()
    	} else {
    		sortedItems = filteredItems.slice()
    	}
    	console.log(sortedItems);



    	

		let paginatedItems = []

		function paginate (array, page_size, page_number) {
		  --page_number;
		  return array.slice(page_number * page_size, (page_number + 1) * page_size);
		}

		paginatedItems = paginate(sortedItems, 10, currentPage)
		console.log(paginatedItems)

		let pagination = null
		    if (currentPage === 1 && tasks.length > 10) {
	        	pagination = <button onClick={this.changeCurrentPageNext}> → </button>	
	        } else if (currentPage !== 1 && paginatedItems.length < 1) {
	        	this.changeCurrentPagePrev()
	        } else if (tasks.length < 11 && currentPage === 1) {
	        	pagination = false
	        } else if (currentPage !== 1 && sortedItems.length > 10) {
	        	pagination = <div className="pagination">
	        		<button onClick={this.changeCurrentPagePrev}> ← </button>
	        	    <button onClick={this.changeCurrentPageNext}> → </button>	
	            </div>
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
				isAlpha={isAlpha}
				filterCompleted={this.filterCompleted}
				filterActive={this.filterActive}
				changeSortOrder={this.changeSortOrder}
				sortDate={this.sortDate}
				alphabetOrder={this.alphabetOrder}
				onClickSortDate={this.onClickSortDate}
				/>
				<form>
					<h3> Filter by </h3>
					<select id="list" onChange={this.getSelectValue()}> 
					  <option ref=""> ... </option>
					  <option ref="all"> All </option>
					  <option ref="active"> Active </option>
					  <option ref="completed"> Completed </option>
					</select>
				</form>
				<ul className="todo-list">
		    	    {
		    	    	items.length > 0 
		    	    	? items
		    	    	: <h2> No tasks yet... </h2>
		    	    }
		    	</ul>
		    	<div>
		    		{	items.length > 0
		    			? pagination
		    			: null
		    		}
		    	</div>    
			</div>
		)
	}
}

export default App
