import React, { Component } from 'react';

import DefaultContent from './components/DefaultContent/DefaultContent';
import Error from './components/Error/Error';
import Loading from './components/Loading/Loading';

import Header from './widgets/Header/Header';
import ProductList from './widgets/ProductList/ProductList';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			api: null,
			apiStatus: null,
			inputValue: '',
			valueOfSearchInput: ''
		};
	}

	onClickLogo = () => {
		this.setState({
			api: null,
			apiStatus: null,
			inputValue: ''
		});
	};

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
					searchButtonDisabled={valueOfSearchInput === ''}
					onChangeSearchInput={this.onChangeSearchInput}
					onClickLogo={() => this.onClickLogo()}
					onClickSearchButton={() => this.onClickSearchButton()}
					onKeyPressSearchInput={this.onKeyPressSearchInput}
					valueOfSearchInput={valueOfSearchInput}
				/>

				<div className="container">{this.searchResult(apiStatus)}</div>
			</>
		);
	}
}
