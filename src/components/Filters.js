import React from 'react'
import './Filters.css'

class Filters extends React.Component {
	render() {
		return (
			<div className="filters">
				<button onClick={this.props.onCheckAll}>Check All</button>
				<button onClick={this.props.onUncheckAll}>Uncheck All</button>
				<button>Delete Selected</button>
			</div>
		)
	}
}

export default Filters