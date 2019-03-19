import React from 'react'
import './ToDoItem.css'



const ToDoItem = (props) => {
	return (
		<div className="todo-item">
			<input 
				type="checkbox" 
				checked={props.checked}
				onChange={() => props.onCheck(props.date)}
				/>
			<label className="switch">
			  <input type="checkbox"
			  		 checked={props.completed}
			  		 onChange={() => props.onComplete(props.date)}
			   />
			  <span className="slider round"></span>
			</label>	
			<textarea disabled={true}>{props.title}</textarea>
			<button> Edit </button>
			<button className="todo-item__button"
					onClick={() => props.onDelete(props.date)}>
				Delete
			</button>
		</div>
	)
}

export default ToDoItem