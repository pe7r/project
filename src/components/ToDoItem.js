import React from 'react'
import './ToDoItem.css'

const ToDoItem = (props) => {
	console.log(props)
	return (
		<div className="todo-item">
			<input 
				type="checkbox" 
				checked={props.completed}
				onChange={() => console.log("Семён!!")} />
			<h3>{props.text}</h3>
		</div>
	)
}

export default ToDoItem