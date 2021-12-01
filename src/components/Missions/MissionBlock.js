import React from "react";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import Clock from "react-digital-clock";
import TiltBox from "../Common/TiltBox";
import Parallegogram from "../Common/Parallegogram";
import Button from "../Common/Button";
import profilePic from "../../assets/images/pic-profile.png";
import totlausers from "../../assets/images/totlausers.svg";
import xpicon from "../../assets/images/xpicon.svg";
import credits from "../../assets/images/small-credits.svg";
import weapon1 from "../../assets/images/weapon1.svg";
import weapon2 from "../../assets/images/weapon2.svg";
import weapon3 from "../../assets/images/weapon3.svg";
import attackIcon from "../../assets/images/attack.svg";
import "react-circular-progressbar/dist/styles.css";

const MissionBlock = ({ title }) => {
	return (
		<div className="missionblock">
			<TiltBox className="missionblock__tiltbox">
				<div className="missionblock__title">{title}</div>
				<div className="missionblock__clockBlock">
					<Clock hour12={false} />
				</div>
				<div className="missionblock__content">
					<div className="missionblock__profilePic">
						<img src={profilePic} alt="profilePic" />
					</div>
					<div className="missionblock__information">
						<div className="d-flex mt-5">
							<div className="missionblock__item">
								<img src={totlausers} alt="totlausers" />
								<p>500 Energy</p>
							</div>
							<div className="missionblock__item">
								<img
									src={xpicon}
									alt="totlausers"
									className="missionblock__item--icon"
								/>
								<p>+250 XP</p>
							</div>
							<div className="missionblock__item">
								<img
									src={credits}
									alt="totlausers"
									className="missionblock__item--credits"
								/>
								<p>+ 1,000</p>
							</div>
						</div>
						<div className="mt-5">
							<Parallegogram className="missionblock__parallegogram">
								Information
							</Parallegogram>
							<div className="missionblock__description">
								DAMMIT. How did they know we were coming? We lost a lot of good
								tech when they killed our guys. At least you got the emitter,
								but it’s useless without the dock. Assault that compound. Use
								whatever force is necessary. Get that dock and get us some
								payback while you’re at it.
							</div>
						</div>
						<div className="d-flex juistify-content-between">
							<div className="mt-5">
								<Parallegogram className="missionblock__parallegogram">
									Weapons needed
								</Parallegogram>
								<div className="missionblock__weapons">
									<img src={weapon1} alt="weapon1" />
									<img src={weapon2} alt="weapon2" />
								</div>
							</div>
							<div className="mt-5 ms-5">
								<Parallegogram className="missionblock__parallegogram">
									Artifact part
								</Parallegogram>
								<div className="missionblock__weapons ms-5 mt-5">
									<img src={weapon3} alt="weapon3" />
								</div>
							</div>
						</div>
					</div>
					<div className="missionblock__controller">
						<Button icon={attackIcon} type="primary">
							start mission
						</Button>
						<CircularProgressbarWithChildren value={60} strokeWidth={6}>
							<div className="missionblock__controller--text">
								<p>60%</p>
								<h6>Success rate</h6>
							</div>
						</CircularProgressbarWithChildren>
						;
					</div>
				</div>
			</TiltBox>
		</div>
	);
};

export default MissionBlock;
