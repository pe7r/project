import React from 'react'
import ToDoItem from './ToDoItem.js'
import './ToDoList.css'
import items from '../items.js'

function ToDoList() {

	const toDoItems = items.map(item => <ToDoItem key={item.id} text={item.text} completed={item.completed} />)

	return (	
			<div>
            	{toDoItems}
        	</div>
		
	)
}

export default ToDoList;