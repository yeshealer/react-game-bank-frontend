import React from "react";
import Clock from "react-digital-clock";
import { ProgressBar } from "react-bootstrap";
import levelIcon from "../../../assets/images/levelIcon.png";
import credits from "../../../assets/images/credits.svg";

const RaidHeader = () => {
	return (
		<div className="raidheader">
			<p> Elon Dusk‏</p>
			<div className="d-flex">
				<div className="raidheader__levelBox ms-5">
					<img src={levelIcon} alt="levelIcon" />
					<p>Level 102</p>
				</div>
				<div className="raidheader__tiltBorder ms-4" />
				<div className="raidheader__progressBox">
					<p>Health</p>
					<div className="barBox">
						<ProgressBar now={60} />
					</div>
					<p>82%</p>
				</div>
				<div className="raidheader__tiltBorder ms-4" />
				<div className="raidheader__creditsBox">
					<img src={credits} alt="credits" />
					<p>10,000</p>
				</div>
			</div>
			<div className="raidheader__clockBlock">
				<Clock hour12={false} />
			</div>
		</div>
	);
};

export default RaidHeader;
