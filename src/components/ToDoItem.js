import React from 'react'
import './ToDoItem.css'

const ToDoItem = (props) => {
	return (
		<div className="todo-item">
			<input 
				type="checkbox" 
				checked={props.completed}
				onChange={() => props.handleChange(props.id)} />
			<h3>{props.text}</h3>
		</div>
	)
}

export default ToDoItem