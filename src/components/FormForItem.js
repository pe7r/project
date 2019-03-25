import React from 'react'
import './ToDoItem.css'

class FormForItem extends React.Component {
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
				  	   onChange={() => this.props.onComplete(this.props.item.date)}
				/>
				<span className="slider round"></span>
				</label>	
				<h2>{this.props.item.title}</h2>
				<button onClick={this.props.handleClickEdit}
						className="todo-item__button"> Edit </button>
				<button className="todo-item__button"
						onClick={() => this.props.onDelete(this.props.item.date)}>
				Delete
				</button>
			</div>
        )
    }
}

export default FormForItem