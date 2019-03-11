import React from 'react'
import './ToDoItem.css'

const ToDoItem = (props) => {
	console.log(props)
	return (
		<div className="todo-item">
			<input type="checkbox" />
			<h3>{props.text}</h3>
		</div>
	)
}

export default ToDoItem