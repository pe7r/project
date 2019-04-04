import React from 'react'
import '../ToDoItem.css'

class FormForEdit extends React.Component {
    render() {

    	let disabledStyle = {
    		color: 'grey'
    	}
    	const {
    		title,
    		item,
    		handleInputChange,
    		handleChange,
    		handleEdit,
    		handleCancel
    	} = this.props;
        return (
            <div className="edit-form">	
					
					<input 
						className="edit-input"
						type="text"
						value={title}
						onChange={handleInputChange}
						maxLength="40"
					/>
					{
						title.length > 0 
						? <button className="todo-item__button"
							onClick={() => {
								handleChange(item, title)
								handleEdit()
							}}
							> Save </button>
						: <button className="todo-item__button"
							disabled
							style={disabledStyle}
							> Save </button>
					}
					<button className="todo-item__button"
							onClick={handleCancel}> Cancel </button>
				</div>
        )
    }
}

export default FormForEdit