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
				onChange={this.props.onChange}
				handleInputChange={this.handleInputChange}
				handleCancel={this.handleCancel}
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