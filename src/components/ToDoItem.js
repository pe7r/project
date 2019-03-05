import React from 'react'
import './ToDoItem.css'

function ToDoItem() {
	return (
		<div className="todo-item">
			<input type="checkbox" />
        	<p>Task text will be here</p>
		</div>
	)
}

export default ToDoItem;