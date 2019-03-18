import React from 'react'
import './Sort.css'

class Sort extends React.Component { 

	render() {
		return (
			<div className="sortButtons">
				<button onClick={this.props.showAllFromParent}> Show All </button>
				<button onClick={this.props.activeSortFromParent}> Show Active </button>
				<button onClick={this.props.completedSortFromParent}> Show Completed </button>
				<button> Sort by date </button>
				<button> Sort by a-z </button>
			</div>
		)
	}
}

export default Sort