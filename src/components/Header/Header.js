import React from 'react';
import './Header.scss';
import logo from './img/logo-ml.png';

import Button from '../Button/Button';
import InputText from '../InputText/InputText';

const Header = ({
	onChangeSearchInput,
	onClickSearchButton,
	onKeyPressSearchInput,
	valueOfSearchInput
}) => (
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
					onChange={onChangeSearchInput}
					onKeyPress={onKeyPressSearchInput}
					placeholder="Nunca dejes de buscar"
					value={valueOfSearchInput}
				/>
				<Button
					className="header__search__button"
					id="searchButton"
					icon="search"
					onClick={onClickSearchButton}
				/>
			</div>
		</div>
	</header>
);

export default Header;
