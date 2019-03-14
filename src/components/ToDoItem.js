import React from 'react'
import './ToDoItem.css'

const ToDoItem = (props) => {
	return (
		<div className="todo-item">
			<input 
				type="checkbox" 
				checked={props.completed}
				onChange={() => props.onCheck(props.date)}/>
			<h3>{props.text}</h3>
			<button className="todo-item__button"
					onClick={() => props.onDelete(props.date)}>
				Delete
			</button>
		</div>
	)
}

export default ToDoItem