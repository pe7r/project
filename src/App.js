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

	filtersChange = (event) => {
		this.setState({
			filterRules: event.target.value
		})
	}

	sortChange = (event) => {
		this.setState({
			sortRules: event.target.value
		})
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
    	if (sortRules === 'last') {
			sortedItems = filteredItems.sort((a, b) => a.date - b.date > 0 ? -1 : 1)
		} else if (sortRules === 'first') {
			sortedItems = filteredItems.sort((a, b) => b.date - a.date > 0 ? -1 : 1)
		} else if (sortRules === 'a-z') {
			sortedItems = filteredItems.sort((a, b) => {
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
		} else if (sortRules === 'z-a') {
			sortedItems = filteredItems.sort((a, b) => {
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
 
	        const PaginationHtml = (<div className="pagination">
	        	{ currentPage === 1 && tasks.length > 10 ? <button onClick={this.changeCurrentPageNext}> → </button> : false }
	        	{ currentPage !== 1 && paginatedItems.length < 1 ? () => this.changeCurrentPagePrev() : false }
	        	{ tasks.length < 11 && currentPage === 1 ? false : null}
				{ currentPage !== 1 && sortedItems.length > 10 ? <div className="pagination">
	        		<button onClick={this.changeCurrentPagePrev}> ← </button>
	        	    <button onClick={this.changeCurrentPageNext}> → </button>	
	            </div> : false }
	        </div>);

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
				<section className="sorts-filters">
					<form>
					<h3> Filter by </h3>
					<select id="filters" onChange={this.filtersChange} value={filterRules}> 
					  <option value="all"> All </option>
					  <option value="active"> Active </option>
					  <option value="completed"> Completed </option>
					</select>
				</form>
				<form>
					<h3> Sort by </h3>
					<select id="sorts" onChange={this.sortChange} value={sortRules}> 
					  <option > ... </option>
					  <option value="a-z"> A - Z </option>
					  <option value="z-a"> Z - A </option>
					  <option value="last"> Last </option>
					  <option value="first"> First </option>
					</select>
				</form>
				</section>
				<ul className="todo-list">
		    	    {
		    	    	items.length > 0 
		    	    	? items
		    	    	: <h2> No tasks yet... </h2>
		    	    }
		    	</ul>
		    	<div>
		    		{	items.length > 0
		    			? PaginationHtml
		    			: null
		    		}
		    	</div>    
			</div>
		)
	}
}

export default App
