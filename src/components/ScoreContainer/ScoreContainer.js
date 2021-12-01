import React from "react";

import ScoreItem from "../ScoreItem";
import credits from "../../assets/images/credits.svg";
import healthpoints from "../../assets/images/healthpoints.svg";

const ScoreContainer = () => {
	return (
		<div className="scoreContainer">
			<ScoreItem
				valueImage={healthpoints}
				currValue={"86"}
				targValue={"200"}
				unit="Health Points"
			/>
			<ScoreItem
				currValue={"30"}
				targValue={"75"}
				unit="Energy - More in 0:45"
			/>
			<ScoreItem currValue={"4"} targValue={"4"} unit="Stamina - Full" />
			<ScoreItem currValue={"300"} unit="Technopoints" />
			<ScoreItem
				currValue={"10,000"}
				unit="credits"
				link="GO TO BANK"
				valueImage={credits}
			/>
		</div>
	);
};

export default ScoreContainer;
