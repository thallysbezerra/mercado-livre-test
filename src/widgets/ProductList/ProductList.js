import React from 'react';
import './ProductList.scss';

import monetaryMask from '../../helpers/monetaryMask';

const ProductList = ({ list }) => (
	<ul className="product-list">
		{list.slice(0, 4).map((item, index) => (
			<li className="product-list__item" key={index}>
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
);

export default ProductList;
