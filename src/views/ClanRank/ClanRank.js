import React from "react";

import PageTitle from "../../components/Common/PageTitle";
import RankingTable from "../../components/ClanRank/RankingTable";

const ClanRank = () => {
	return (
		<div className="clanrank">
			<PageTitle title="Clan Rank" />
			<RankingTable />
		</div>
	);
};

export default ClanRank;
