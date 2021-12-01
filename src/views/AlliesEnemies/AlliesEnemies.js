import React from "react";

import PageTitle from "../../components/Common/PageTitle";
import RankingContainer from "../../components/Rankings/RankingContainer";

const AlliesEnemies = () => {
	return (
		<div className="alliesEnemies">
			<PageTitle title="Allies & Enemies" />
			<div className="alliesEnemies__section">
				<div className="row ">
					<div className="col">
						<RankingContainer header="Allies" />
					</div>
					<div className="col">
						<RankingContainer header="Enemies" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default AlliesEnemies;
