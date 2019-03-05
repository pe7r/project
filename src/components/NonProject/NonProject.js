import React from 'react'
import './NonProject.css'

function SomeFunction(props) {
	console.log(props)
	return (
	    <div className="contacts">
	    	<div className="contact-card">
		        <img align="center" src={props.contact.imgUrl}/>
		        <h3><font color="#3AC1EF">▍{props.contact.name}</font></h3>
		        <p>Phone: {props.contact.phone}</p>
		        <p>Email: {props.contact.email}</p>
		        <p>Favourite food: {props.contact.favouriteFood}</p>
		        <p>Adress: {props.info.adress}</p>
		        <p>Hobby: {props.info.hobby}</p>
	        </div>
        </div>
	)
}

export default SomeFunction;