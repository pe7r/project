import React from 'react'
import '../ToDoItem.css'

class FormForItem extends React.Component {
    render() {
    	const {
    		checked,
    		item,
    		onComplete,
    		onDelete,
    		onCheck,
    		handleClickEdit,
    		checkedTasks,
    		markChecked
    	} = this.props;
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
				<h3 onDoubleClick={handleClickEdit}> { item.title } </h3>
				<button onClick={handleClickEdit}
						className="todo-item__button"> 🖉 </button>
				<button className="todo-item__button"
						onClick={() => onDelete(item.date)}>
				✖
				</button>
			</div>
        )
    }
}

export default FormForItem