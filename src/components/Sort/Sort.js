import React from 'react'
import './Sort.css'

class Sort extends React.Component { 

	render() {
		const {
			showAllFromParent,
			activeSortFromParent,
			completedSortFromParent,
			changeSortOrder
		} = this.props;
		return (
			<div className="sortButtons">
				<button onClick={showAllFromParent}> Show All </button>
				<button onClick={activeSortFromParent}> Show Active </button>
				<button onClick={completedSortFromParent}> Show Completed </button>
				<button onClick={changeSortOrder}> Sort by date </button>
			</div>
		)
	}
}

export default Sort