import React from 'react'
import ToDoItem from './ToDoItem.js'
import './ToDoList.css'
import items from '../items.js'

class ToDoList extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			todos: items
		}
	}

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
		const toDoItems = this.state.todos.map(item => <ToDoItem 
			key={item.id}
			id={item.id}
			text={item.text}
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