import React from 'react'
import ToDoItem from './ToDoItem.js'
import './ToDoList.css'

class ToDoList extends React.Component {



	render() {
		const toDoItems = this.props.listOfTasks.map(item => <ToDoItem 
			key={item.date}
			date={item.date}
			text={item.title}
			completed={item.completed}
			/>)

		return (	
			<div className="todo-list">
            	{toDoItems}
        	</div>
		
		)
	}
}

export default ToDoList