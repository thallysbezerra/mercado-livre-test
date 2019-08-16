import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({ children, className, icon, onClick }) => (
	<button
		className={`button ${className} ${icon && !children && 'button--small'}`}
		onClick={onClick}
	>
		{icon && <i className={`button__icon fas fa-${icon}`} />}
		{children}
	</button>
);

Button.propTypes = {
	className: PropTypes.string,
	children: PropTypes.any,
	icon: PropTypes.string,
	onClick: PropTypes.func.isRequired
};

export default Button;
