import React from "react";

import line2 from "../../assets/images/line2.png";

const ScoreItem = ({ currValue, targValue, valueImage, unit, link }) => {
	return (
		<div className="scoreItem">
			<div className="scoreItem__content">
				<div className="d-flex align-items-center">
					{valueImage && (
						<img
							src={valueImage}
							alt="valueImage"
							className="scoreItem__valueImage"
						/>
					)}
					<p className="scoreItem__currValue">{currValue}</p>
					{targValue && (
						<img src={line2} alt="line2" className="scoreItem__slant" />
					)}
					{targValue && <p className="scoreItem__targValue">{targValue}</p>}
				</div>
				<div className="scoreItem__unitBox">
					<p className="scoreItem__unit">{unit}</p>
					{link && <p className="scoreItem__link">{link}</p>}
				</div>
			</div>
		</div>
	);
};

export default ScoreItem;
