import React from "react";
import { useMediaQuery } from "react-responsive";
import { ProgressBar } from "react-bootstrap";

import mark from "../../assets/images/mark.svg";
import ring from "../../assets/images/ring.svg";
const Desktop = ({ children }) => {
	const isDesktop = useMediaQuery({ minWidth: 992 });
	return isDesktop ? children : null;
};

const TabletMobile = ({ children }) => {
	const isMobile = useMediaQuery({ maxWidth: 991 });
	return isMobile ? children : null;
};

const LevelBar = () => {
	return (
		<div className="levelbar">
			<Desktop>
				<div className="levelbar__valuesContent">
					<div className="levelbar__values">Level 25</div>
					<div className="levelbar__progress">
						<div>58%</div>
						<div>
							<p>290 / 1000 xp</p>
							<ProgressBar variant="success" now={58} />
						</div>
					</div>
				</div>
				<div className="levelbar__notificationContent">
					<p>Notifications</p> <img src={mark} alt="mark" />{" "}
					<p>LAMBO!!! YOU WON THE BATTLE.</p>{" "}
					<div className="ring">
						{" "}
						<img src={ring} alt="ring" /> <div className="ring_badge" />
					</div>
				</div>
			</Desktop>
			<TabletMobile>
				<div className="levelbar__valuesContent--tablet">
					<div className="levelbar__values">Level 25</div>
					<div className="levelbar__progress">
						<div>58%</div>
						<div>
							<p>290 / 1000 xp</p>
							<ProgressBar variant="success" now={58} />
						</div>
					</div>
				</div>
			</TabletMobile>
		</div>
	);
};

export default LevelBar;
