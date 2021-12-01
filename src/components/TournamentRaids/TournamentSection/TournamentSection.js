import React from "react";
import classNames from "classnames";

import PageTitle from "../../Common/PageTitle";
import JoinTournament from "./JoinTournament";

const TournamentSection = ({ className }) => {
	return (
		<div className={classNames("col-5", className)}>
			<PageTitle title="Tournament" />
			<JoinTournament />
		</div>
	);
};

export default TournamentSection;
