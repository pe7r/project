import React from 'react'
import './Filters.css'

class Filters extends React.Component {
	render() {
		return (
			<div className="filters">
				<button>Check All</button>
				<button>Uncheck All</button>
				<button>Delete Selected</button>
			</div>
		)
	}
}

export default Filters