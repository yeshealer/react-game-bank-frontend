import React from "react";
import classNames from "classnames";
import PageTitle from "../../Common/PageTitle";
import RaidItem from "./RaidItem";

const RaidSection = (className) => {
	return (
		<div className={classNames("col-7", className)}>
			<PageTitle title="Raids" />
			<RaidItem />
			<RaidItem />
			<RaidItem />
		</div>
	);
};

export default RaidSection;
