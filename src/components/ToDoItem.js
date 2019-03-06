import React from 'react'
import './ToDoItem.css'

function ToDoItem(props) {
	console.log(props)
	return (
		<div className="todo-item">
			<input type="checkbox" />
			<p>{props.description}</p>
		</div>
	)
}

export default ToDoItem