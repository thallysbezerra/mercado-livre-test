import React, { Component } from 'react';
import './Header.scss';
import logo from './img/logo-ml.png';

import Button from '../Button/Button';
import InputText from '../InputText/InputText';

export default class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			apiSearch: null,
			apiSearchStatus: null,
			valueOfSearchInput: ''
		};
	}

	onChangeSearchInput = event => {
		this.setState({
			valueOfSearchInput: event.target.value
		});
	};

	onClickSearchInput = () => {
		const { valueOfSearchInput } = this.state;

		fetch(
			`https://api.mercadolibre.com/sites/MLA/search?q=${valueOfSearchInput}`
		)
			.then(response => response.json())
			.then(data => {
				this.setState({
					apiSearchStatus: 'success',
					apiSearch: data.results
				});
			})
			.catch(() => {
				this.setState({
					apiSearchStatus: 'error'
				});
			});
	};

	render() {
		const { valueOfSearchInput } = this.state;

		return (
			<header className="header">
				<div className="container flex-container">
					<div className="header__logo">
						<img
							className="header__logo__img"
							src={logo}
							alt="Logo - Mercado Libre"
						/>
					</div>
					<div className="header__search">
						<InputText
							className="header__search__input-text"
							onChange={this.onChangeSearchInput}
							placeholder="Nunca dejes de buscar"
							value={valueOfSearchInput}
						/>
						<Button
							className="header__search__button"
							icon="search"
							onClick={() => this.onClickSearchInput()}
						/>
					</div>
				</div>
			</header>
		);
	}
}
