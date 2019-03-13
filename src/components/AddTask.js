import React from 'react'
import './AddTask.css'

class AddTask extends React.Component {
	state = {
		title: ''
	}

	handleInputChange = event => {
		this.setState({ title: event.target.value })
	}

	addNewTask = () => {
		let newTask = {
			title: this.state.title,
			data: +new Date()
		}
		this.props.handlerFromParentAddNewTask(newTask)
	}

	render() {
		return (
			<div className="add-task">
				<input 
				type="text" 
				placeholder="Add Todo..."
				value={this.state.title}
				onChange={this.handleInputChange}
				/>
    			<button onClick={this.addNewTask}>Add task</button>
			</div>
		)
	}
}

export default AddTask