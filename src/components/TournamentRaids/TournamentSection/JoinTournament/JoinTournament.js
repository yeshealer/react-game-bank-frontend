import React from "react";
import { withRouter } from "react-router";
import Button from "../../../Common/Button";
import playIcon from "../../../../assets/images/play.png";

const JoinTournament = ({ history }) => {
	const joinTournament = () => {
		history.push("/tournament");
	};

	return (
		<div className="tournamentRaids__toursection_jointournament">
			<Button
				icon={playIcon}
				type="primary"
				className="ms-3"
				onClick={joinTournament}
			>
				Join Tourament
			</Button>
		</div>
	);
};

export default withRouter(JoinTournament);
