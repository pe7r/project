import React from 'react'
import '../ToDoItem.css'

class FormForItem extends React.Component {
	state = {
		showButtons: false
	}

	handleHoverOn = () => {
    	this.setState({showButtons: true})
    }

    handleHoverOff = () => {
    	this.setState({showButtons: false})
    }

    render() {


    	const buttons = (<section className={`edit-delete ${this.state.showButtons ? 'edit-delete-active' : ''}`}>
						<button className="todo-item__button"
								onClick={handleClickEdit}
						> 🖉 </button>
						<button className="todo-item__button"
								onClick={() => onDelete(item.date)}>
						✖
						</button>
					  </section>)


    	const {
    		item,
    		onComplete,
    		onDelete,
    		onCheck,
    		handleClickEdit,
    		checkedTasks
    	} = this.props;
        return (
            <div className="todo-item"
            	 onMouseEnter={this.handleHoverOn}
            	 onMouseLeave={this.handleHoverOff}
            >
				<input 
					type="checkbox" 
					checked={checkedTasks.includes(item)}
					onChange={event => onCheck(item, event)}
				/>
				<label className="switch">
				<input type="checkbox"
				  	   checked={item.completed}
				  	   onChange={() => onComplete(item.date)}
				/>
				<span className="slider round"></span>
				</label>	
				<h2 onDoubleClick={handleClickEdit}> { item.title } </h2>
				{
					buttons
				}
			</div>
        )
    }
}

export default FormForItem