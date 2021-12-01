import React from "react";

import Button from "../../Common/Button";
import Parallegogram from "../../Common/Parallegogram";
import ProgressBar from "../../Common/ProgressBar";
import TiltBox from "../../Common/TiltBox";
import profilePic from "../../../assets/images/pic-profile.png";
import PointCounter from "../PointCounter";
import credits from "../../../assets/images/credits.svg";
import levelIcon from "../../../assets/images/levelIcon.png";

const TechLabBlock = () => {
	return (
		<div className="techLabBlock">
			<div className="techLabBlock__infoBox">
				<p>Your BALANCE Name</p>
				<div className="d-flex">
					<div className="techLabBlock__infoBox-levelBox">
						<img src={levelIcon} alt="levelIcon" />
						<p>Level 102</p>
					</div>
					<div className="techLabBlock__infoBox-tiltBorder ms-5" />
					<div className="techLabBlock__infoBox-progressBox">
						<ProgressBar />
						<p>58%</p>
					</div>
				</div>
			</div>
			<TiltBox className="techLabBlock__tiltBox">
				<img
					src={profilePic}
					alt="profilePic"
					className="techLabBlock__picture"
				/>
				<div className="row">
					<div className="col text-center">
						<Parallegogram className="techLabBlock__parallegogram">
							Current Tech Points
						</Parallegogram>
						<div className="techLabBlock__currpoints">
							<h1>189</h1>
							<h6>pt</h6>
						</div>
					</div>
					<div className="col text-center">
						<Parallegogram className="techLabBlock__parallegogram">
							Information
						</Parallegogram>
						<div className="techLabBlock__information">
							<p>
								With your basic rewards from staking GAME you are able to at
								least buy 10 Tech Points per day. 10 Tech Points are needed to
								revive yourself if you got killed somehow.
							</p>
						</div>
					</div>
					<div className="col text-center">
						<Parallegogram className="techLabBlock__parallegogram">
							Buy Tech Points
						</Parallegogram>
						<PointCounter />
						<div className="techLabBlock__price">
							<p>PRICE</p>
							<img src={credits} alt="credits" />
							<h5>10,000</h5>
						</div>
						<Button className="mt-4" type="warning">
							Buy Points
						</Button>
					</div>
				</div>
			</TiltBox>
		</div>
	);
};

export default TechLabBlock;
