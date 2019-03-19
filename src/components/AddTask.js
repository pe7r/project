import React from 'react'
import './AddTask.css'

class AddTask extends React.Component {
	state = {
		title: ''
	}

		addNewTask = () => {
		let newTask = {
			title: this.state.title,
			date: +new Date(),
			checked: false,
			completed: false
		}
		this.props.onCreate(newTask)
		}

		handleInputChange = event => {
		this.setState({ title: event.target.value })
	}

	submit = () => {
		if (this.isValid()) {
			this.addNewTask()
		} else {
			alert("Task item can not be empty!")
		}
	}

	handleKeyPress = (event) => {
		if (event.key === 'Enter') {
    		this.submit()
	    }
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
				onKeyPress={this.handleKeyPress}
				/>
    			<button onClick={this.submit}>Add task</button>
			</div>
		)
	}
}

export default AddTask