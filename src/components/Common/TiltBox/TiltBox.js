import React from "react";
import classNames from "classnames";

const TiltBox = ({ className, children }) => {
	return <div className={classNames("tiltBox", className)}>{children}</div>;
};

export default TiltBox;
