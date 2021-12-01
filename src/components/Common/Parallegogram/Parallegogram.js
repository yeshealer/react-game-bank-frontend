import React from "react";
import classNames from "classnames";

const Parallegogram = ({ children, className, onClick }) => {
	return (
		<div className={classNames(className, "parallegogram")} onClick={onClick}>
			{children}
		</div>
	);
};

export default Parallegogram;
