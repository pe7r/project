import React from 'react'
import ToDoItem from './ToDoItem.js'
import './ToDoList.css'
import items from '../items.js'

class ToDoList extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			todos: items
		}
	}

	handleChange = (id) => {
		console.log("Changed!", id)
	}

	render() {
		const toDoItems = this.state.todos.map(item => <ToDoItem 
														key={item.id}
														id={item.id}
														text={item.text}
														handleChange={this.handleChange} />)

		return (	
			<div className="todo-list">
            	{toDoItems}
        	</div>
		
	)
	}
}

export default ToDoList