import React from 'react'
import ToDoItem from './ToDoItem.js'
import './ToDoList.css'

class ToDoList extends React.Component {

	handleChange = (id) => {
		this.setState(prevState => {
			const updatedTodos = prevState.todos.map(todo => {
				if (todo.id === id) {
					todo.completed = !todo.completed
				}
				return todo
			})
			console.log(this.state.todos)
			return {
				todos: updatedTodos
			}
		})
	}

	render() {
		const toDoItems = this.props.listOfTasks.map(item => <ToDoItem 
			key={item.date}
			
			text={item.title}
			completed={item.completed}
			handleChange={this.handleChange} />)

		return (	
			<div className="todo-list">
            	{toDoItems}
        	</div>
		
		)
	}
}

export default ToDoList