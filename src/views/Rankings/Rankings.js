import React from "react";

import PageTitle from "../../components/Common/PageTitle";
import RankingContainer from "../../components/Rankings/RankingContainer";

const Rankings = () => {
	return (
		<div className="rankings">
			<PageTitle title="Ranking" />
			<div className="rankings__section">
				<div className="row ">
					<div className="col">
						<RankingContainer header="Top Dog(overall)" />
					</div>
					<div className="col">
						<RankingContainer header="Most kills" />
					</div>
				</div>
				<div className="row ">
					<div className="col mt-5">
						<RankingContainer header="Most CREDIT" />
					</div>
					<div className="col mt-5">
						<RankingContainer header="Largest Alliance" />
					</div>
				</div>
				<div className="row ">
					<div className="col mt-5">
						<RankingContainer header="Most Losses" />
					</div>
					<div className="col mt-5">
						<RankingContainer header="Largest Armory" />
					</div>
				</div>
				<div className="row ">
					<div className="col mt-5">
						<RankingContainer header="Most Real-Estate" />
					</div>
					<div className="col mt-5">
						<RankingContainer header="Most Bosses Killed" />
					</div>
				</div>
				<div className="row ">
					<div className="col-6 mt-5">
						<RankingContainer header="Most Wars Won" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Rankings;
