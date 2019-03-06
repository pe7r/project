import React from 'react'
import './NonProject.css'

function Joke(props) {
	console.log(props)
	return (
	    <div className="joke">
		        <h3> Question: {props.question} </h3>
		        <h3> Answer: {props.punchline} </h3>
		    <hr/>            
        </div>
	)
}

export default Joke;