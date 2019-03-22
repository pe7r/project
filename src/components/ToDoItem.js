import React from 'react'
import './ToDoItem.css'
import ToEditForm from './ToEditForm'
import EditedForm from './EditedForm'
import ItemForm from './ItemForm'



class ToDoItem extends React.Component {
	state = {
		edit: false,
		saveChanges: false,
		title: '',
		itemTitle: ''
	}

	handleCancel = () => {
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
			saveChanges: true,
			itemTitle: this.state.title
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
			<ItemForm 
			item={this.props.item}
			onComplete={this.props.onComplete}
			onCheck={this.props.onCheck}
			onDelete={this.props.onDelete}
			handleClickEdit={this.handleClickEdit}
			/>
		)
		}
	}
	
}

export default ToDoItem