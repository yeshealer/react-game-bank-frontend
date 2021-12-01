import React from "react";
import Clock from "react-digital-clock";
import { withRouter } from "react-router-dom";
import Button from "../../../Common/Button";
import picProfile from "../../../../assets/images/pic-profile.png";
import levelIcon from "../../../../assets/images/levelIcon.png";
import attackIcon from "../../../../assets/images/attack.svg";
import usersIcon from "../../../../assets/images/usersicon.svg";
import dateIcon from "../../../../assets/images/dateIcon.svg";
import creditsIcon from "../../../../assets/images/credits.svg";

const RaidItem = ({ history }) => {
	return (
		<div className="tournamentRaids__raidsection_raiditem">
			<img src={picProfile} alt="picProfile" className="profile_image" />
			<div className="profile_box">
				<div>
					<h4>ELON DUSK</h4>
					<div className="valueContainer">
						<div className="valueBox">
							<img src={levelIcon} alt="levelIcon" />
							<p>Level 102</p>
						</div>
						<div className="valueBox">
							<img src={usersIcon} alt="usersIcon" />
							<p>Total Joined 9,523</p>
						</div>
						<div className="valueBox">
							<img src={dateIcon} alt="dateIcon" />
							<p>active until 20/3/2021</p>
						</div>
					</div>
					<div className="clock_credits">
						<div className="tournamentRaids__clockBlock">
							<Clock hour12={false} />
						</div>
						<h5>PRICE POOL</h5>
						<div className="creditsbox">
							<img src={creditsIcon} alt="creditsIcon" />
							<p>10,000</p>
						</div>
					</div>
				</div>
				<div>
					<Button
						icon={attackIcon}
						type="primary"
						className="ms-3"
						onClick={() => history.push("/raidroom")}
					>
						Battle
					</Button>
				</div>
			</div>
		</div>
	);
};

export default withRouter(RaidItem);
