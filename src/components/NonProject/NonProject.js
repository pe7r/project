import React from 'react'
import './NonProject.css'

function Joke(props) {
	console.log(props)
	return (
	    <div className="joke">
		        <h3 style={{display: props.question ? "block" : "none"}}>
		         	Question: {props.question} 
		        </h3>
		        <h3 style={{color: !props.question && "blue"}}> Answer: {props.punchline} </h3>
		    	<hr/>            
        </div>
	)
}

export default Joke;