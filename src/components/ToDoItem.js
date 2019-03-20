import React from 'react'
import './ToDoItem.css'



class ToDoItem extends React.Component {
	state = {
		edit: false,
		editedText: ''
	}

	handleEdit = () => {
		this.setState(
		 {	edit: !this.state.edit}
		)
	}

	handleEditChange = event => {
    this.setState({
      edittedText: event.target.value
    });
  };

	render() {

		if (this.state.edit) {
			return (
				<div className="todo-item">
					<input 
						type="checkbox" 
						checked={this.props.checked}
						onChange={() => this.props.onCheck(this.props.date)}
						value={this.props.title}
						/>
					<label className="switch">
					<input type="checkbox"
					  	   checked={this.props.completed}
					  	   onChange={this.handleEditChange}
					  	   value={this.props.title}
					/>
					<span className="slider round"></span>
					</label>	
					<input 
						className="edit-input"
						type="text" 
						value={this.state.title}
						onChange={this.handleInputChange}
						maxLength="40"
						onKeyPress={this.handleKeyPress}
					/>
					<button onClick={() => this.handleEdit()}> Done </button>
					<button className="todo-item__button"
							onClick={() => console.log('Cancel')}>
						Cancel
					</button>
				</div>
			)
		} else {
			return (
			<div className="todo-item">
				<input 
					type="checkbox" 
					checked={this.props.checked}
					onChange={() => this.props.onCheck(this.props.date)}
				/>
				<label className="switch">
				<input type="checkbox"
				  	   checked={this.props.completed}
				  	   onChange={() => this.props.onComplete(this.props.date)}
				/>
				<span className="slider round"></span>
				</label>	
				<h2>{this.props.title}</h2>
				<button onClick={this.handleEdit}> Edit </button>
				<button className="todo-item__button"
						onClick={() => this.props.onDelete(this.props.date)}>
					Delete
				</button>
			</div>
		)
		}
	}
	
}

export default ToDoItem