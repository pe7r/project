import React from 'react'
import './Sort.css'

class Sort extends React.Component {
	state = {
		sortView: false,
		filterView: false
	} 

	changeSortView = () => {
		this.setState(prevState => {
			return {sortView: !prevState.sortView}
		})
	}

	render() {
		const {
			showAll,
			filterActive,
			filterCompleted,
			changeSortOrder,
			isDateSorted,
			sortAlphabet,
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
				<button onClick={sortAlphabet}> Sort by a-z </button>
			</div>
		)
	}
}

export default Sort