import React from 'react'
import './AddTask.css'

function AddTask() {

		
	return (
		<div className="add-task">
			<input type="text" onMouseOver={} placeholder="Type here..." />
        	<button onDoubleClick={() => alert("IT WORKS, WORKS!")}>Add task</button>
		</div>
	)
}

export default AddTask