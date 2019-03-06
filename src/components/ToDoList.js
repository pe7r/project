import React from 'react'
import ToDoItem from './ToDoItem.js'
import './ToDoList.css'
import items from '../items.js'

function ToDoList() {

	const toDoItems = items.map(item => <ToDoItem key={item.id} description={item.description} />)

	return (	
			<div>
            	{toDoItems}
        	</div>
		
	)
}

export default ToDoList;