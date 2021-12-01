import React from "react";

import Button from "../../Common/Button";
import Parallegogram from "../../Common/Parallegogram";
import ProgressBar from "../../Common/ProgressBar";
import TiltBox from "../../Common/TiltBox";
import profilePic from "../../../assets/images/pic-profile.png";
import healthpoints from "../../../assets/images/healthpoints.svg";
import PointCounter from "../PointCounter";

const MediPack = () => {
	return (
		<div className="medipack">
			<TiltBox className="medipack__tiltBox">
				<img src={profilePic} alt="profilePic" className="medipack__picture" />
				<div className="row">
					<div className="col text-center">
						<Parallegogram className="medipack__parallegogram">
							Current Medi Pack
						</Parallegogram>
						<div className="medipack__currpoints">
							<h1>932</h1>
							<h6>pt</h6>
						</div>
						<div className="medipack__information">
							<p>
								With your basic rewards from staking GAME you are able to at
								least buy 10 Tech Points per day. 10 Tech Points are needed to
								revive yourself if you got killed somehow.
							</p>
						</div>
					</div>
					<div className="col text-center">
						<Parallegogram className="medipack__parallegogram">
							Buy Medi Pack
						</Parallegogram>
						<PointCounter />
						<div className="medipack__price">
							<p>PRICE</p>
							<h5>1,000</h5>
							<img src={healthpoints} alt="credits" />
						</div>
						<div>
							<Button className="mt-4" type="warning">
								Buy Pack
							</Button>
						</div>
						<div>
							<Button className="mt-4" type="green">
								Heal
							</Button>
						</div>
						<div>
							<Button className="mt-4" type="primary">
								Revive
							</Button>
						</div>
					</div>
					<div className="col text-center">
						<Parallegogram className="medipack__parallegogram">
							Mobile Handicap
						</Parallegogram>
						<Button className="mt-4" type="blue">
							Activate
						</Button>
					</div>
				</div>
			</TiltBox>
		</div>
	);
};

export default MediPack;
