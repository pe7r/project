import React from 'react'
import './ToDoItem.css'
import FormForEdit from './Forms/FormForEdit.js'
import FormForItem from './Forms/FormForItem.js'



class ToDoItem extends React.Component {
	state = {
		checked: false,
		edit: false,
		title: '',
		itemTitle: ''
	}

	handleCancel = () => {
		this.handleEdit()
	}

	handleClickEdit = () => {
		const { item } = this.props;
		this.setState({
			title: item.title
		})
		this.handleEdit()
	}

	handleEdit = () => {
		this.setState(prevState => ({ 
			edit: !prevState.edit 
		}))
	}	

	handleInputChange = event => {
		this.setState({
			title: event.target.value
		})
	}


	render() {
		const {
			item,
			onComplete,
			onCheck,
			onChange,
			onDelete,
		} = this.props;
		const {
			title,
			edit
		} = this.state;

		if (edit) {
			return (
				<FormForEdit
				title={title}
				item={item}
				onChange={this.handleEditChange}
				handleEdit={this.handleEdit}
				onComplete={onComplete}
				onCheck={onCheck}
				handleChange={onChange}
				handleInputChange={this.handleInputChange}
				handleCancel={this.handleCancel}
				/>
			)
		} else {
		return (
			<FormForItem 
			item={item}
			onComplete={onComplete}
			onCheck={onCheck}
			onDelete={onDelete}
			handleClickEdit={this.handleClickEdit}
			handleCheck={this.handleCheck}
			/>
		)
		}
	}
	
}

export default ToDoItem