import React, { Component } from 'react';

import DefaultContent from './components/DefaultContent/DefaultContent';
import Error from './components/Error/Error';
import Header from './components/Header/Header';
import Loading from './components/Loading/Loading';
import ProductList from './components/ProductList/ProductList';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			api: null,
			apiStatus: null,
			valueOfSearchInput: '',
			inputValue: ''
		};
	}

	onChangeSearchInput = event => {
		this.setState({
			valueOfSearchInput: event.target.value
		});
	};

	onKeyPressSearchInput(event) {
		if (event.key === 'Enter') {
			document.getElementById('searchButton').click();
		}
	}

	onClickSearchButton = () => {
		const { valueOfSearchInput } = this.state;

		this.setState({ apiStatus: 'requesting' }, () => {
			fetch(
				`https://api.mercadolibre.com/sites/MLA/search?q=${valueOfSearchInput}`
			)
				.then(response => response.json())
				.then(data => {
					this.setState({
						api: data.results,
						apiStatus: 'success'
					});
				})
				.catch(() => {
					this.setState({
						apiStatus: 'error',
						apiLoading: false
					});
				});
		});
	};

	searchResult(param) {
		const { api, apiStatus } = this.state;

		switch (param) {
			case 'error':
				return <Error />;
			case 'requesting':
				return <Loading />;
			case 'success':
				return <ProductList list={apiStatus === 'success' && api} />;
			default:
				return <DefaultContent />;
		}
	}

	render() {
		const { apiStatus, valueOfSearchInput } = this.state;

		return (
			<>
				<Header
					onChangeSearchInput={this.onChangeSearchInput}
					onClickSearchButton={() => this.onClickSearchButton()}
					onKeyPressSearchInput={this.onKeyPressSearchInput}
					valueOfSearchInput={valueOfSearchInput}
				/>

				<div className="container">{this.searchResult(apiStatus)}</div>
			</>
		);
	}
}
