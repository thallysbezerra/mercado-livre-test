import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './InputText.scss';

export default class Input extends Component {
	render() {
		const { className, onChange, placeholder, value } = this.props;
		return (
			<input
				className={`input-text ${className}`}
				onChange={onChange}
				placeholder={placeholder}
				type="text"
				value={value}
			/>
		);
	}
}

Input.propTypes = {
	className: PropTypes.string,
	onChange: PropTypes.func,
	placeholder: PropTypes.string.isRequired,
	value: PropTypes.string
};
