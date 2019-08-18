import React, { Component } from 'react';
import './ProductDetails.scss';

import Button from '../../components/Button/Button';
import monetaryMask from '../../helpers/monetaryMask';

export default class ProductDetails extends Component {
	buyProduct = () => {
		alert('Comprar producto');
	};

	render() {
		const { active, description, details } = this.props;

		return (
			<section className={`product-details ${!active ? 'hide' : ''}`}>
				{active && (
					<div className="flex-container">
						<div className="flex-item grid-container">
							<img
								className="product-details__img"
								src={details.thumbnail}
								alt={details.title}
							/>
							<div className="product-details__infos">
								<small className="product-details__infos__condition-quantity">
									{details.condition} - {details.sold_quantity}{' '}
									vendidos
								</small>
								<h2 className="product-details__infos__title">
									{details.title}
								</h2>
								<div className="product-details__infos__price">
									{monetaryMask(details.price)}
								</div>
								<Button full onClick={() => this.buyProduct()}>
									Comprar
								</Button>
							</div>
						</div>

						<div className="flex-item">
							<h3 className="product-details__description__title">
								Descripción del producto
							</h3>
							<p className="product-details__description__text">
								{description.plain_text}
							</p>
						</div>
					</div>
				)}
			</section>
		);
	}
}
