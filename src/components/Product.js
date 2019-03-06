import React from 'react'

function Product(props) {
	console.log(props)
	return (
		<div className="todo-item">
			<h3>Item: {props.name}</h3>
			<hr />
			<p>Price: {props.price} $</p>
			<hr />
			<p>Description: {props.description}</p>
			<hr />
		</div>
	)
}

export default Product