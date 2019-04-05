import React, { Component } from 'react'
import './App.css'
import Header from './components/Header/Header'
import AddTask from './components/AddTask/AddTask'
import ToDoItem from './components/ToDoItem/ToDoItem'
import defaultItems from './defaultItems.js'


class App extends Component {
	state = {
		tasks: defaultItems,
		checkedTasks: [],
		currentPage: 1,
		filterRules: 'all',
		checkRules: '',
		checkAction: '',
		sortRules: ''
	}

	addTask = newTask => {
		const newList = this.state.tasks;
		newList.push(newTask);
		this.setState({
			tasks: newList
		})
	}



	onCheck = date => {
		const check = [...this.state.checkedTasks]
		if (!check.includes(date)) {
		  this.setState({ checkedTasks: [...check, date] })
		} else {
		  check.splice(check.indexOf(date), 1)
		  this.setState({ checkedTasks: check })
		}
	}

    checkAll = () => {
    	const { tasks, checkedTasks } = this.state;
    	const checkedItems = []
    	tasks.forEach((item, i) => {
	        if (!checkedTasks.includes(item)) {
	            checkedItems.push(tasks[i])
		    }
		})
    this.setState({ checkedTasks: [...checkedTasks, ...checkedItems] })
    }

	uncheckAll = () => {
		this.setState({
			checkedTasks: []
		})
	}

	deleteSelected = () => {
	const { tasks, checkedTasks } = this.state;

	const deletedItems = []
	const checkedItems = []

	tasks.forEach(task => {
		if (checkedTasks.includes(task)) deletedItems.push(task)
		});
	const newTasks = tasks.filter(task => !deletedItems.includes(task))

	newTasks.forEach(task => {
		if (checkedTasks.includes(task)) {
			checkedItems.push(task)
		}
	})
	this.setState({
	   tasks: newTasks,
	   checkedTasks: checkedItems
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

	changeCurrentPage = (actualPage) => {
		this.setState({
			currentPage: actualPage 
		})
	}

	filtersChange = (event) => {
		this.setState({
			filterRules: event.target.value,
			currentPage: 1
		})
	}

	sortChange = (event) => {
		this.setState({
			sortRules: event.target.value,
			currentPage: 1
		})
	}

	checkAction = (event) => {
		this.setState({
			checkRules: event.target.value
		},() => {
		if (this.state.checkRules === 'check') {
			this.checkAll()
		} else if (this.state.checkRules === 'uncheck') {
			this.uncheckAll()
		} else if (this.state.checkRules === 'delete') {
			this.deleteSelected()
		}
		})

	}

	render() {

		const {
			tasks,
			currentPage,
			filterRules,
			sortRules,
			checkRules
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



    	

		let paginatedItems = []

		function paginate (array, page_size, page_number) {
		  --page_number;
		  return array.slice(page_number * page_size, (page_number + 1) * page_size);
		}

		paginatedItems = paginate(sortedItems, 10, currentPage)



        if (currentPage !== 1 && paginatedItems.length < 1) {
            this.changeCurrentPagePrev()
        }	


		let items = [];
			
				items = paginatedItems.map(item => <ToDoItem
			tasks={tasks} 
			key={item.date}
			item={item}
			onCheck={this.onCheck}
			onDelete={this.onDelete}
			onComplete={this.onComplete}
			onChange={this.onChange}
			checkedTasks={this.state.checkedTasks}
			markChecked={this.markChecked}
			/>)

				

		return (
			<div className="app">
				<Header />
				<AddTask 
				onCreate={this.addTask} 
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
						    <option value="first"> First </option>
						    <option value="last"> Last </option>
						    <option value="a-z"> A - Z </option>
						    <option value="z-a"> Z - A </option>
						</select>
					</form>
				</section>
				<section>
					<form className="check">
						<h5> With checked: </h5>
						<select id="sorts" onChange={this.checkAction} value={checkRules}> 
						    <option value=""> ... </option>
						    <option value="check"> Check All </option>
						    <option value="uncheck"> Uncheck All </option>
						    <option value="delete"> Delete Selected </option>
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
		    		{ sortedItems.length > 10 
		    			?	[...Array(Math.ceil(sortedItems.length / 10))].map((x, i) => (
					          <button
					            className={`pagination-number ${currentPage === i + 1 ? 'active-button' : ''}`}
					            key={i}
					            id={i + 1}
					            onClick={event => this.changeCurrentPage(+event.target.id)}
					          >
					            {i + 1}
					          </button>
					        ))
		    			: null
		    		}
		    	</div>    
			</div>
		)
	}
}

export default App