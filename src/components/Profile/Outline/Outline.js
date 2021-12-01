import React from "react";

import TiltBox from "../../Common/TiltBox";
import ProgressBar from "../../Common/ProgressBar";
import Button from "../../Common/Button";
import Parallegogram from "../../Common/Parallegogram";
import picProfile from "../../../assets/images/pic-profile.png";
import levelIcon from "../../../assets/images/levelIcon.png";
import shieldIcon from "../../../assets/images/shield.svg";
import deniedIcon from "../../../assets/images/denied.svg";
import attackIcon from "../../../assets/images/attack.svg";

const Outline = () => {
	return (
		<div className="outline">
			<div className="outline__header">
				<p className="outline__header-name">WARREN BUFFER</p>
				<div className="d-flex">
					<div className="outline__header-levelBox">
						<img src={levelIcon} alt="levelIcon" />
						<p>Level 102</p>
					</div>
					<div className="outline__header-tiltBorder ms-5" />
					<div className="outline__header-progressBox">
						<ProgressBar />
						<p>58%</p>
					</div>
				</div>
				<div className="outline__header-btnBox">
					<Button icon={shieldIcon} type="success">
						ALLIANCE
					</Button>
					<Button icon={deniedIcon} type="danger" className="ms-3">
						Bounty
					</Button>
					<Button icon={attackIcon} type="primary" className="ms-3">
						Battle
					</Button>
				</div>
			</div>
			<TiltBox>
				<div className="outline__tiltContent">
					<img
						src={picProfile}
						alt="picProfile"
						className="outline__tiltContent-pic"
					/>
					<div>
						<Parallegogram className="outline__tiltContent-title">
							CHARACTER STATS
						</Parallegogram>
						<div className="d-flex align-items-center">
							<div className="outline__tiltContent-item">
								<h5>350</h5>
								<p>HP</p>
							</div>
							<div className="outline__tiltContent-item">
								<h5>136</h5>
								<p>defense</p>
							</div>
							<div className="outline__tiltContent-item">
								<h5>3</h5>
								<p>stamina</p>
							</div>
							<div className="outline__tiltContent-item">
								<h5>25</h5>
								<p>attack</p>
							</div>
							<div className="outline__tiltContent-item">
								<h5>78</h5>
								<p>energy</p>
							</div>
						</div>
						<div>
							<Parallegogram className="outline__tiltContent-title">
								your overal ranking
							</Parallegogram>
							<div className="d-flex align-items-center">
								<div className="outline__tiltContent-item">
									<h5>350</h5>
									<p>kills</p>
								</div>
								<div className="outline__tiltContent-item">
									<h5>136</h5>
									<p>wins</p>
								</div>
								<div className="outline__tiltContent-item">
									<h5>3</h5>
									<p>loses</p>
								</div>
								<div className="outline__tiltContent-item">
									<h5>25</h5>
									<p>deaths</p>
								</div>
								<div className="outline__tiltContent-item">
									<h5>78</h5>
									<p>alliace</p>
								</div>
							</div>
						</div>
					</div>
					<div className="outline__tiltContent-separater"></div>
					<div className="outline__tiltContent-rightBox">
						<Parallegogram className="outline__tiltContent-title mb-5">
							enhancement
						</Parallegogram>
						<div>
							<img src={picProfile} alt="picprofile" />
						</div>
						<Button type="gradient mt-4">change buff</Button>
					</div>
				</div>
			</TiltBox>
		</div>
	);
};

export default Outline;
