import React from 'react'
import './ToDoItem.css'



class ToDoItem extends React.Component {

	state = {
		edit: false,
		saveChanges: false,
		value: '',
		editedValue: ''
	}

	handleEdit = () => {
		this.setState({ 
			edit: !this.state.edit 
		})
		this.handleEditChange()
	}

	handleEditChange = event => {
		const title = this.props.title;
	    this.setState({
	      value: title
	    })
	}

	saveChanges = (event) => {
		console.log('saveChanges');
		this.setState({
			editedValue: event.target.value,
			saveChanges: true
		})
	}



	render() {

		if (this.state.edit) {
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
					  	   onChange={() =>this.props.onComplete(this.props.date)}/>
					<span className="slider round"></span>
					</label>	
					<input 
						className="edit-input"
						type="text" 
						value={this.state.value}
						onChange={this.handleEditChange}
						maxLength="40"
						onKeyPress={this.handleKeyPress}
					/>
					<button onClick={this.saveChanges}
							className="todo-item__button"> Save </button>
					<button className="todo-item__button"
							onClick={() => this.handleEdit()}> Cancel </button>
				</div>
			)
		} else if (this.state.saveChanges) {
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
					<h2>{this.value}</h2>
					<button onClick={this.handleEdit}
							className="todo-item__button"> Edit </button>
					<button className="todo-item__button"
							onClick={() => this.props.onDelete(this.props.date)}>
					Delete
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
				<button onClick={this.handleEdit}
						className="todo-item__button"> Edit </button>
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