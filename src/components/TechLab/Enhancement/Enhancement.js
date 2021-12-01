import React from "react";

import EnhancementItem from "../EnhancementItem";
import assault from "../../../assets/images/assault.png";
import fortress from "../../../assets/images/fortress.png";
import techman from "../../../assets/images/techman.png";

const Enhancement = () => {
	return (
		<div className="enhancement">
			<p>choose your enhancement</p>
			<h6>
				An enhancement change costs 50 Tech Points. Tech Points are bought with
				CREDIT or gained freely by leveling up or doing missions and raids.
			</h6>
			<div>
				<EnhancementItem title="Assult" image={assault} />
				<EnhancementItem title="Fortress" image={fortress} />
				<EnhancementItem title="Trackman" image={techman} />
			</div>
		</div>
	);
};

export default Enhancement;
