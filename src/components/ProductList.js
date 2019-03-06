import React from 'react'
import Product from './Product.js'
import products from '../vschoolProducts.js'

function ProductList() {

	const productComponents = products.map(product => <Product key={product.id} name={product.name} 
		price={product.price.toLocaleString("en-US", { style: 'currency', currency: 'USD' })} description={product.description} />)

	return (	
			<div>
            	{productComponents}
        	</div>
		
	)
}

export default ProductList