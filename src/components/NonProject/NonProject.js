import React from 'react'
import './NonProject.css'

function SomeFunction(props) {
	console.log(props)
	return (
	    <div className="contacts">
	    	<div className="contact-card">
		        <img align="center" src={props.imgUrl}/>
		        <h3><font color="#3AC1EF">▍{props.name}</font></h3>
		        <p>Phone: {props.phone}</p>
		        <p>Email: {props.email}</p>
	        </div>
        </div>
	)
}

export default SomeFunction;