import React, { Component } from 'react';
import './ProductList.scss';

import monetaryMask from '../../helpers/monetaryMask';
import ProductDetails from '../ProductDetails/ProductDetails';

export default class ProductList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			apiProduct: null,
			apiProductStatus: null,
			apiDescription: null,
			apiDescriptionStatus: null,
			productId: null
		};
	}

	showProductDetails = event => {
		this.setState(
			{ apiProductStatus: 'requesting', productId: event },
			() => {
				fetch(`https://api.mercadolibre.com/items/${event}`)
					.then(response => response.json())
					.then(data => {
						this.setState({
							apiProduct: data,
							apiProductStatus: 'success'
						});
					})
					.catch(() => {
						this.setState({
							apiProductStatus: 'error',
							apiProductLoading: false
						});
					});
			}
		);
		this.setState(
			{ apiDescriptionStatus: 'requesting', productId: event },
			() => {
				fetch(`https://api.mercadolibre.com/items/${event}/description`)
					.then(response => response.json())
					.then(data => {
						this.setState({
							apiDescription: data,
							apiDescriptionStatus: 'success'
						});
					})
					.catch(() => {
						this.setState({
							apiDescriptionStatus: 'error',
							apiDescriptionLoading: false
						});
					});
			}
		);
	};

	render() {
		const { list } = this.props;
		const {
			apiDescription,
			apiDescriptionStatus,
			apiProduct,
			apiProductStatus
		} = this.state;

		console.log('apiDescription :', apiDescription);
		console.log('apiProduct :', apiProduct);
		console.log('###');
		console.log('apiDescriptionStatus :', apiDescriptionStatus);
		console.log('apiProductStatus :', apiProductStatus);
		console.log('###');

		return (
			<>
				<ul
					className={`product-list ${
						apiDescriptionStatus === 'success' &&
						apiProductStatus === 'success'
							? 'hide'
							: ''
					}`}
				>
					{list.slice(0, 4).map((item, index) => (
						<li
							className="product-list__item"
							key={index}
							onClick={() => this.showProductDetails(item.id)}
						>
							<img
								src={item.thumbnail}
								alt={item.title}
								className="product-list__item__img"
							/>

							<div className="product-list__item__info">
								<div className="product-list__item__info--left-area">
									<span className="product-list__item__info__price">
										{monetaryMask(item.price)}
									</span>
									{item.shipping.free_shipping && (
										<i className="product-list__item__info__icon fas fa-truck" />
									)}
									<p className="product-list__item__info__title">
										{item.title}
									</p>
								</div>

								<div className="product-list__item__info--right-area">
									<span className="product-list__item__info__state">
										{item.address.state_name}
									</span>
								</div>
							</div>
						</li>
					))}
				</ul>
				{apiDescriptionStatus === 'success' &&
					apiProductStatus === 'success' && (
						<ProductDetails
							details={apiProduct}
							description={apiDescription}
						/>
					)}
			</>
		);
	}
}
