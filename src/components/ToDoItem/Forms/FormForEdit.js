import React from 'react'
import '../ToDoItem.css'

class FormForEdit extends React.Component {
    render() {
        return (
            <div className="todo-item">
					
					<input 
						className="edit-input"
						type="text"
						value={this.props.title}
						onChange={this.props.handleInputChange}
						maxLength="40"
					/>
					<button className="todo-item__button"
							onClick={() => {
								this.props.handleChange(this.props.item, this.props.title)
								this.props.handleEdit()
							}}
							> Save </button>
					<button className="todo-item__button"
							onClick={this.props.handleCancel}> Cancel </button>
				</div>
        )
    }
}

export default FormForEdit