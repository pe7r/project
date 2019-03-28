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
			changeSortOrder
		} = this.props; 

		return (
			<div className="sortButtons">
				<button onClick={showAll}> Show All </button>
				<button onClick={filterActive}> Show Active </button>
				<button onClick={filterCompleted}> Show Completed </button>
				<button onClick={changeSortOrder, this.changeSortView}> {
					this.state.sortView
					? 'Show last'
					: 'Show first'
				} </button>
			</div>
		)
	}
}

export default Sort