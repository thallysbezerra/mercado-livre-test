import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './InputText.scss';

export default class Input extends Component {
	render() {
		const {
			className,
			id,
			onChange,
			onKeyPress,
			placeholder,
			value
		} = this.props;
		return (
			<input
				className={`input-text ${className}`}
				id={id}
				onChange={onChange}
				onKeyPress={onKeyPress}
				placeholder={placeholder}
				type="text"
				value={value}
			/>
		);
	}
}

Input.propTypes = {
	className: PropTypes.string,
	id: PropTypes.string,
	onChange: PropTypes.func,
	onKeyPress: PropTypes.func,
	placeholder: PropTypes.string.isRequired,
	value: PropTypes.string
};

Input.defaultProps = {
	placeholder: 'Needs placeholder text'
};
