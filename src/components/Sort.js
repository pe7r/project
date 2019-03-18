import React from 'react'
import './Sort.css'

class Sort extends React.Component {

/*	completedActiveSort = completed => {
		const {parentAddSortedTasks} = this.props
		let sortTasks
		for (value in this.)
	}*/

	render() {
		return (
			<div className="sortButtons">
				<button onClick={this.props.onShowAll}> Show All </button>
				<button onClick={() => this.props.completedActiveSort(false)}> Show Active </button>
				<button onClick={() => this.props.completedActiveSort(true)}> Show Completed </button>
				<button> Sort by date </button>
				<button> Sort by alphabet </button>
			</div>
		)
	}
}

export default Sort