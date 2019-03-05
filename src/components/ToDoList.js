import React from 'react'
import ToDoItem from './ToDoItem.js'
import './ToDoList.css'

function ToDoList() {
	return (
		<div className="todo-list">
			<ToDoItem />
			<ToDoItem />
			<ToDoItem />
			<ToDoItem />
			<ToDoItem />
		</div>
		
	)
}

export default ToDoList;