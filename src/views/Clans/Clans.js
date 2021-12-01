import React from "react";

import PageTitle from "../../components/Common/PageTitle";
import Contracts from "../../components/Clans/Contracts";
import RankingTable from "../../components/Clans/RankingTable";

const Clans = () => {
	return (
		<div className="clans">
			<PageTitle title="Smart Contractors" />
			<Contracts />
			<RankingTable />
		</div>
	);
};

export default Clans;
