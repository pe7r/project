import React from 'react'
import './ToDoItem.css'

class ToEditForm extends React.Component {
	state = {
		
	}

    render() {
        return (
            <div className="todo-item">
					<input 
						type="checkbox" 
						checked={this.props.item.checked}
						onChange={() => this.props.onCheck(this.props.item.date)}
						/>
					<label className="switch">
					<input type="checkbox"
					  	   checked={this.props.item.completed}
					  	   onChange={() => this.props.onComplete(this.props.item.date)}/>
					<span className="slider round"></span>
					</label>	
					<input 
						className="edit-input"
						type="text"
						value={this.props.title}
						onChange={this.props.handleInputChange}
						maxLength="40"
					/>
					<button className="todo-item__button"
							onClick={this.props.handleSave}
							> Save </button>
					<button className="todo-item__button"
							onClick={this.props.handleCancel}> Cancel </button>
				</div>
        )
    }
}

export default ToEditForm