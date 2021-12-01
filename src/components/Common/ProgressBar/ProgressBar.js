import React from "react";
import { ProgressBar } from "react-bootstrap";

const Progress = ({ variant = "success" }) => {
	return (
		<div className="progressBar">
			<ProgressBar variant={variant} now={58} />
		</div>
	);
};

export default Progress;
