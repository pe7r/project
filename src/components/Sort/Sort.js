import React from 'react'
import './Sort.css'

class Sort extends React.Component { 

	render() {
		const {
			showAllFromParent,
			activeSortFromParent,
			completedSortFromParent,
			dateSortFromParent,
			titleSortFromParent
		} = this.props;
		return (
			<div className="sortButtons">
				<button onClick={showAllFromParent}> Show All </button>
				<button onClick={activeSortFromParent}> Show Active </button>
				<button onClick={completedSortFromParent}> Show Completed </button>
				<button onClick={dateSortFromParent}> Sort by date </button>
				<button onClick={titleSortFromParent}> Sort by a-z </button>
			</div>
		)
	}
}

export default Sort