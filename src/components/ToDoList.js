import React from 'react'
import ToDoItem from './ToDoItem.js'
import './ToDoList.css'
import items from '../items.js'

class ToDoList extends React.Component {
	constructor() {
		super()
		this.state = {
			todos: items
		}
	}


	render() {
		const toDoItems = this.state.todos.map(item => <ToDoItem key={item.id} text={item.text} completed={item.completed} />)

		return (	
			<div className="todo-list">
            	{toDoItems}
        	</div>
		
	)
	}
}

export default ToDoList