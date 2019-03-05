import React from 'react'
import './AddTask.css'

function AddTask() {
	return (
		<div className="add-task">
			<input type="text" placeholder="Type here..." />
        	<input type="submit" value="Add" />
		</div>
	)
}

export default AddTask;