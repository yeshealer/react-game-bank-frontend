import React from "react";
import PageTitle from "../../components/Common/PageTitle";
import RaidHeader from "../../components/RaidRoom/RaidHeader";
import RaidOutline from "../../components/RaidRoom/RaidOutline/RaidOutline";

const RaidRoom = () => {
	return (
		<div className="raidroom">
			<PageTitle title="Raid Room" />
			<RaidHeader />
			<RaidOutline />
		</div>
	);
};

export default RaidRoom;
