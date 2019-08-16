import React from 'react';

const ProductDetails = ({ description, details }) => (
	<section className="product-details">
		Detalhes
		<div>{details.thumbnail}</div>
		<div>{details.condition}</div>
		<div>{details.sold_quantity}</div>
		<div>{details.title}</div>
		<div>{details.price}</div>
		<div>{description.plain_text}</div>
	</section>
);

export default ProductDetails;
