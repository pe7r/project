import React from 'react'
import './AddTask.css'

class AddTask extends React.Component {
	state = {
		title: ''
	}

	handleInputChange = event => {
		this.setState({ title: event.target.value })
	}

	submit = () => {
		if (this.isValid()) {
			this.addNewTask()
		} else {
			alert("Length of task should be a minimum of 1 symbol")
		}
	}

	addNewTask = () => {
		let newTask = {
			title: this.state.title,
			date: +new Date(),
			completed: false
		}
		this.props.onCreate(newTask)
	}

	isValid = () => {
		if (this.state.title.length <= 0) {
			return false
		} else {
			return true
		}
	}

	render() {
		return (
			<div className="add-task">
				<input 
				type="text" 
				placeholder="Add Todo..."
				value={this.state.title}
				onChange={this.handleInputChange}
				maxLength="40"
				/>
    			<button onClick={this.submit}>Add task</button>
			</div>
		)
	}
}

export default AddTask