import React from 'react'
import './NonProject.css'

function Joke(props) {
	console.log(props)
	return (
	    <div className="joke">
		        <p> {props.question} <br /></p>
		        
		        <p> {props.punchline} </p>        
        </div>
	)
}

export default Joke;