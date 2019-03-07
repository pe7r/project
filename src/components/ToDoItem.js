import React from 'react'
import './ToDoItem.css'

function ToDoItem(props) {
	console.log(props)
	return (
		<div className="todo-item">
			<input type="checkbox" />
			<h3>{props.text}</h3>
		</div>
	)
}

export default ToDoItem