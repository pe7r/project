import React, { Component } from 'react'
import './App.css'
import Header from './components/Header/Header'
import AddTask from './components/AddTask/AddTask'
import ToDoItem from './components/ToDoItem/ToDoItem'
import Filters from './components/Filters/Filters'
import Sort from './components/Sort/Sort.js'
import Pagination from './components/Pagination/Pagination.js'


class App extends Component {
	state = {
		tasks: [
		{
        title: 'Buy horse',
        date: 1553171609032,
        completed: false,
      },
      {
        title: 'Become better human',
        date: 155317124040,
        completed: true,
      },
      {
        title: 'Do this',
        date: 15532543209040,
        completed: false,
      },
      {
        title: 'Make that',
        date: 1534571609040,
        completed: true,
      },
      {
        title: 'Learn JS Promises',
        date: 1553154309040,
        completed: false,
      },
      {
        title: 'Watch a movie',
        date: 15531609040,
        completed: true,
      },
      {
        title: 'Learn a verse',
        date: 155317165432040,
        completed: false,
      },
      {
        title: 'Read a book',
        date: 1553432040,
        completed: true,
      },
      {
        title: 'Do ToDoList',
        date: 15531715342040,
        completed: false,
      },
      {
        title: 'Become markup developer',
        date: 15531753240,
        completed: false,
      },
      {
        title: 'Watch football',
        date: 15554329040,
        completed: true,
      },
      {
        title: 'Be focused',
        date: 155532609040,
        completed: true,
      },
      {
        title: 'New one',
        date: 15531532409040,
        completed: false,
      },
		],
		checkedTasks: []
	}

	addTask = newTask => {
		const newList = this.state.tasks;
		newList.push(newTask);
		this.setState({
			tasks: newList,
			isSorted: false,
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
			return {isSorted: !prevState.isSorted}
		})
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

   



	render() {

		const {
			showSortedTasks,
			tasks,
		} = this.state;

		let sortedItems = [...this.state.tasks]
		if (this.state.isSorted) {
			sortedItems.sort((a, b) => a.date - b.date > 0 ? -1 : 1)
		} else {
			sortedItems.sort((a, b) => b.date - a.date > 0 ? -1 : 1)
		}



//1. sort. items -> sortedItems(this.state.isSorted, items)
//2. filter -> sortedItems -> filteredtems(true/false)
//3. paginate -> filteredItems -> paginatedItems(currentPage/1/2/3)

		let items = [];
			
				items = sortedItems.map(item => <ToDoItem
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
				completedSortFromParent={this.completedSort}
				activeSortFromParent={this.activeSort}
				showAllFromParent={() => this.setSorted(false)}
				changeSortOrder={this.changeSortOrder}
				/>
				<ul className="todo-list">
		    	    {
		    	    	items.length > 0 
		    	    	? items
		    	    	: <h2> No tasks yet... </h2>
		    	    }
		    	</ul>
		    	<div className="pagination">
				<button onClick={() => this.goToPage(1)}> 1 </button>
				<button> 2 </button>
				<button> 3 </button>
			</div>
			</div>
		)
	}
}

export default App
