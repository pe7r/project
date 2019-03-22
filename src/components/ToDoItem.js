import React from 'react'
import './ToDoItem.css'
import ToEditForm from './ToEditForm'
import EditedForm from './EditedForm';



class ToDoItem extends React.Component {

	state = {
		edit: false,
		saveChanges: false,
		title: '',
		itemTitle: ''
	}

	handleCancel = () => {
		this.setState({
			title: this.props.item.title
		})
		this.handleEdit()
	}

	handleClickEdit = () => {
		this.setState({
			title: this.props.item.title
		})
		this.handleEdit()
	}

	handleEdit = () => {
		this.setState(prevState => ({ 
			edit: !prevState.edit 
		}))
	}

	handleSave = () => {
		console.log('handleSave');
		this.setState({
			saveChanges: true
		})
		this.handleEdit()
	}

	handleInputChange = event => {
		this.setState({
			title: event.target.value
		})
	}


	render() {

		if (this.state.edit) {
			return (
				<ToEditForm
				title={this.state.title}
				item={this.props.item}
				onChange={this.handleEditChange}
				handleEdit={this.handleEdit}
				handleKeyPress={this.handleKeyPress}
				onComplete={this.props.onComplete}
				onCheck={this.props.onCheck}
				handleSave={this.handleSave}
				handleInputChange={this.handleInputChange}
				handleCancel={this.handleCancel}
				/>
			)
		} else if (this.state.saveChanges) {
			return (
				<EditedForm
				item={this.props.item}
				title={this.state.title}
				onComplete={this.props.onComplete}
				onCheck={this.props.onCheck}
				handleEdit={this.handleEdit}
				onChange={this.handleEditChange}
				onDelete={this.props.onDelete}
				/>
			)
		} else {
		return (
			<div className="todo-item">
				<input 
					type="checkbox" 
					checked={this.checked}
					onChange={() => this.props.onCheck(this.props.item.date)}
				/>
				<label className="switch">
				<input type="checkbox"
				  	   checked={this.completed}
				  	   onChange={() => this.props.onComplete(this.props.item.date)}
				/>
				<span className="slider round"></span>
				</label>	
				<h2>{this.props.item.title}</h2>
				<button onClick={this.handleClickEdit}
						className="todo-item__button"> Edit </button>
				<button className="todo-item__button"
						onClick={() => this.props.onDelete(this.props.item.date)}>
				Delete
				</button>
			</div>
		)
		}
	}
	
}

export default ToDoItem