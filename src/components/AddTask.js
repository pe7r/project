import React from 'react'
import './AddTask.css'

class AddTask extends React.Component {
	constructor(props) {
		super(props)
	}

		
	render() {
		return (
			<div className="add-task">
				<input type="text" placeholder="Type here..." />
    			<button onClick={() => alert("FBI DON'T MOVE")}>Add task</button>
			</div>
		)
	}
}

export default AddTask