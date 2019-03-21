import React from 'react'
import './ToDoItem.css'

class ToEditItem extends React.Component {
    render() {
        return (
            <div className="todo-item">
					<input 
						type="checkbox" 
						checked={this.checked}
						onChange={() => this.onCheck(this.date)}
						/>
					<label className="switch">
					<input type="checkbox"
					  	   completed={this.completed}
					  	   onChange={() => this.onComplete(this.date)}/>
					<span className="slider round"></span>
					</label>	
					<input 
						className="edit-input"
						type="text" 
						value={this.props.value}
						onChange={this.onChange}
						maxLength="40"
						onKeyPress={this.handleKeyPress}
					/>
					<button onClick={this.saveChanges}
							className="todo-item__button"> Save </button>
					<button className="todo-item__button"
							onClick={() => this.handleEdit()}> Cancel </button>
				</div>
        )
    }
}

export default ToEditItem