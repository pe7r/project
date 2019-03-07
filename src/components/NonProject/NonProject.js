import React from "react"
import ReactDOM from "react-dom"


class NonProject extends React.Component {
	constructor() {
		super()
	    this.state = {
			name: "Peter",
			age: 20
		}
	}

	render() {
		return (
	        <div>
	            <h1>{this.state.name}</h1>
	            <h3><font color="#3AC1EF">▍{this.state.age} years old</font></h3>
	        </div>
	    )    
	}
	 
}

export default NonProject