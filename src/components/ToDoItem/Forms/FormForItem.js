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
    		handleClickEdit
    	} = this.props;
        return (
            <div className="todo-item">
				<input 
					type="checkbox" 
					checked={checked}
					onChange={() => onCheck(item)}
				/>
				<label className="switch">
				<input type="checkbox"
				  	   checked={item.completed}
				  	   onChange={() => onComplete(item.date)}
				/>
				<span className="slider round"></span>
				</label>	
				<h2>{item.title}</h2>
				<button onClick={handleClickEdit}
						className="todo-item__button"> Edit </button>
				<button className="todo-item__button"
						onClick={() => onDelete(item.date)}>
				Delete
				</button>
			</div>
        )
    }
}

export default FormForItem