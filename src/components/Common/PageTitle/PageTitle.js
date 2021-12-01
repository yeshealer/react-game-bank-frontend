import React from "react";
import rt1 from "../../../assets/images/rt1.svg";
import rt3 from "../../../assets/images/rt3.svg";

const PageTitle = ({ title }) => {
	return (
		<div className="pagetitle__header">
			<img src={rt1} alt="rt1" />
			<p>{title}</p>
			<img src={rt3} alt="rt3" />
		</div>
	);
};

export default PageTitle;
