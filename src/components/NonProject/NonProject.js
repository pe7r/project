import React from "react"
import './NonProject.css'

class NonProject extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button>Change!</button>
            </div>
        )
    }
}

export default NonProject