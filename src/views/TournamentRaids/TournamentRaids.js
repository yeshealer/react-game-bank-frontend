import React from "react";

import TournamentSection from "../../components/TournamentRaids/TournamentSection";
import RaidSection from "../../components/TournamentRaids/RaidSection";

const Tournament = () => {
	return (
		<div className="tournamentRaids">
			<div className="row">
				<TournamentSection className="tournamentRaids__toursection" />
				<RaidSection className="tournamentRaids__raidsection" />
			</div>
		</div>
	);
};

export default Tournament;
