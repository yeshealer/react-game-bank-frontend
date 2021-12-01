import React from "react";

import classNames from "classnames";

const Button = ({ children, icon, type, className, onClick, disabled }) => {
	return (
		<button
			className={classNames(className, "button", `button-${type}`)}
			onClick={onClick}
			disabled={disabled}
		>
			{icon && <img src={icon} alt={icon.toString()} />}
			{children}
		</button>
	);
};

export default Button;
