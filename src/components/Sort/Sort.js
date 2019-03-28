import React from 'react'
import './Sort.css'

class Sort extends React.Component {

	render() {
		const {
			showAll,
			filterActive,
			filterCompleted,
			changeSortOrder,
			isDateSorted,
			isAlpha,
			alphabetOrder,
		} = this.props; 

		return (
			<div className="sortButtons">
				<button onClick={showAll}> Show All </button>
				<button onClick={filterActive}> Show Active </button>
				<button onClick={filterCompleted}> Show Completed </button>
				<button onClick={changeSortOrder}> {
					isDateSorted
					? 'Sort by first'
					: 'Sort by last'
				} </button>
				<button onClick={alphabetOrder}> { isAlpha 
					? 'Z - A' 
					: 'A - Z' 
				} </button>
			</div>
		)
	}
}

export default Sort