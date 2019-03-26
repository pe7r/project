import React from 'react'
import './ToDoItem.css'
import FormForEdit from './Forms/FormForEdit.js'
import FormForEditedItem from './Forms/FormForEditedItem.js'
import FormForItem from './Forms/FormForItem.js'



class ToDoItem extends React.Component {
	state = {
		checked: false,
		edit: false,
		saveChanges: false,
		title: '',
		itemTitle: ''
	}

	handleCheck = () => {
		this.setState(prevState => ({ 
			checked: !prevState.checked 
		}))
		console.log('Handle Check')
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
				<FormForEdit
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
				<FormForEditedItem
				item={this.props.item}
				title={this.state.title}
				onComplete={this.props.onComplete}
				onCheck={this.props.onCheck}
				handleEdit={this.handleEdit}
				handleCheck={this.handleCheck}
				onChange={this.handleEditChange}
				onDelete={this.props.onDelete}
				/>
			)
		} else {
		return (
			<FormForItem 
			item={this.props.item}
			onComplete={this.props.onComplete}
			onCheck={this.props.onCheck}
			onDelete={this.props.onDelete}
			handleClickEdit={this.handleClickEdit}
			handleCheck={this.handleCheck}
			/>
		)
		}
	}
	
}

export default ToDoItem