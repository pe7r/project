import React from 'react'
import './Sort.css'

class Sort extends React.Component {

	render() {
		return (
			<div className="sortButtons">
				<button onClick={this.props.showAll}> Show All </button>
				<button> Show Active </button>
				<button> Show Completed </button>
			</div>
		)
	}
}

export default Sort