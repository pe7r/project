import React from 'react'
import '../ToDoItem.css'

class FormForItem extends React.Component {
    render() {

    	const {
    		item,
    		onComplete,
    		onDelete,
    		onCheck,
    		handleClickEdit,
    		checkedTasks
    	} = this.props;

    	    	const buttons = (<section className={`edit-delete`}>
						<button className="todo-item__button"
								onClick={handleClickEdit}
						> 🖉 </button>
						<button className="todo-item__button"
								onClick={() => onDelete(item.date)}>
						✖
						</button>
					  </section>)
    	    	
        return (
            <div className="todo-item">
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