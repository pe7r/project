import React from 'react'
import './Sort.css'

class Sort extends React.Component {

	render() {
		return (
			<div className="sortButtons">
				<button onClick={this.props.onShowAll}> Show All </button>
				<button onClick={this.props.onShowActive}> Show Active </button>
				<button onClick={this.props.onShowCompleted}> Show Completed </button>
				<button> Sort by date </button>
				<button> Sort by Alphabet </button>
			</div>
		)
	}
}

export default Sort