import React from "react";

import arrowUp from "../../../assets/images/arrow-up.svg";
import arrowDown from "../../../assets/images/arrow-down.svg";

const PointCounter = () => {
	const [counter, setCounter] = React.useState(200);

	return (
		<div className="pointCounter">
			<div
				className="pointCounter__btn"
				onClick={() => setCounter(counter - 1)}
			>
				<img src={arrowUp} alt="arrowUp" />
			</div>
			<div className="pointCounter__center">
				<p>{counter}</p>
			</div>
			<div
				className="pointCounter__btn"
				onClick={() => setCounter(counter + 1)}
			>
				<img src={arrowDown} alt="arrowDown" />
			</div>
		</div>
	);
};

export default PointCounter;
