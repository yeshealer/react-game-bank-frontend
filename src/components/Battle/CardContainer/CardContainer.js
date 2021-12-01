import React from "react";

import BattleModal from "../BattleModal";
import PicProfile from "../../../assets/images/pic-profile.png";
import levelIcon from "../../../assets/images/levelIcon.png";
import shakeIcon from "../../../assets/images/shakeIcon.png";
import profileIcon from "../../../assets/images/profile.svg";

const CardContainer = () => {
	return (
		<div className="cardContainer">
			<img
				src={PicProfile}
				alt="PicProfile"
				className="cardContainer__picProfile"
			/>
			<div>
				<p className="cardContainer__title">Warren Buffer</p>
				<div className="cardContainer__levelbox">
					<img src={levelIcon} alt="levelIcon" />
					<span>Level 102</span>
					<img src={shakeIcon} alt="shakeIcon" />
					<span>Alliance 23</span>
				</div>
				<div className="cardContainer__infoBox">
					<div className="cardContainer__infoItem">
						<p className="cardContainer__infoItem--title">156</p>
						<p className="cardContainer__infoItem--type">Win</p>
					</div>
					<div className="cardContainer__infoItem">
						<p className="cardContainer__infoItem--title">26</p>
						<p className="cardContainer__infoItem--type">LOSSES</p>
					</div>
					<div className="cardContainer__infoItem">
						<p className="cardContainer__infoItem--title">134</p>
						<p className="cardContainer__infoItem--type">KILLS</p>
					</div>
					<div className="cardContainer__infoItem">
						<p className="cardContainer__infoItem--title">126</p>
						<p className="cardContainer__infoItem--type">DEATHS</p>
					</div>
				</div>
			</div>
			<div className="cardContainer__btnBox">
				<BattleModal />
				<button className="btn cardContainer__profileBtn">
					<img src={profileIcon} alt="playIcon" /> Profile
				</button>
			</div>
		</div>
	);
};

export default CardContainer;
