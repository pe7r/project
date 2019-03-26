import React, { Component } from 'react'
import './App.css'
import Header from './components/Header/Header'
import AddTask from './components/AddTask/AddTask'
import ToDoItem from './components/ToDoItem/ToDoItem'
import Filters from './components/Filters/Filters'
import Sort from './components/Sort/Sort.js'


class App extends Component {
	state = {
		tasks: [
		{
        title: 'Buy horse',
        date: 1553171609032,
        completed: false,
      },
      {
        title: 'Become markup developer',
        date: 155317124040,
        completed: true,
      },
      {
        title: 'Do this',
        date: 15532543209040,
        completed: true,
      },
      {
        title: 'Make that',
        date: 1534571609040,
        completed: true,
      },
      {
        title: 'Learn JS Promises',
        date: 1553154309040,
        completed: true,
      },
      {
        title: 'Watch a movie',
        date: 15531609040,
        completed: true,
      },
      {
        title: 'Learn a verse',
        date: 155317165432040,
        completed: true,
      },
      {
        title: 'Read a book',
        date: 1553432040,
        completed: true,
      },
      {
        title: 'Do ToDoList',
        date: 15531715342040,
        completed: true,
      },
      {
        title: 'Become markup developer',
        date: 15531753240,
        completed: true,
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
        title: 'Stop dreaming',
        date: 15531532409040,
        completed: true,
      },
		],
		checkedTasks: [],
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
			onChange={this.onChange}
			/>)
			} else {
				items = this.state.tasks.map(item => <ToDoItem 
			key={item.date}
			item={item}
			onCheck={this.onCheck}
			onDelete={this.onDelete}
			onComplete={this.onComplete}
			onChange={this.onChange}
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
