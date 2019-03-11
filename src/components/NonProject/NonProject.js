import React from "react"

class NonProject extends React.Component {
	constructor() {
		super()
		this.state = {
			isLoggedIn: false,	
		}
	}




	render() {
		let wordDisplay
		if (this.state.isLoggedIn) {
			wordDisplay = "in"
		} else {
			wordDisplay = "out"
		}


	    return (
	        <div>
	            <h2>You are currently logged {wordDisplay}</h2>
	        </div>
		)
	}
}

export default NonProject