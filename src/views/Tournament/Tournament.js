import React from "react";

import PageTitle from "../../components/Common/PageTitle";
import TournamentTree from "../../components/Tournament/TournamentTree";

const Tournament = () => {
	return (
		<div className="tournament">
			<PageTitle title="Tournament" />
			<TournamentTree />
		</div>
	);
};

export default Tournament;
