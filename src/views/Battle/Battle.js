import React from "react";

import FilterContainer from "../../components/Battle/FilterContainer";
import CardContainer from "../../components/Battle/CardContainer";

const Battle = () => {
	return (
		<div className="battle">
			<FilterContainer />
			<div className="row battle__cardBox">
				<div className="col-6">
					<CardContainer />
				</div>
				<div className="col-6">
					<CardContainer />
				</div>
				<div className="col-6">
					<CardContainer />
				</div>
				<div className="col-6">
					<CardContainer />
				</div>
			</div>
		</div>
	);
};

export default Battle;
