import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({ children, className, disabled, icon, id, onClick }) => (
	<button
		className={`button ${className} ${icon && !children && 'button--small'}`}
		disabled={disabled}
		id={id}
		onClick={onClick}
	>
		{icon && <i className={`button__icon fas fa-${icon}`} />}
		{children}
	</button>
);

Button.propTypes = {
	className: PropTypes.string,
	children: PropTypes.any,
	disabled: PropTypes.bool,
	icon: PropTypes.string,
	id: PropTypes.string,
	onClick: PropTypes.func.isRequired
};

Button.defaultProps = {
	onClick: () => {
		console.log('This button needs to do something');
	}
};

export default Button;
