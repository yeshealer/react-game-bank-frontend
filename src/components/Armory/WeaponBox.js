import React from "react";

import TiltBox from "../Common/TiltBox";
import battleItem from "../../assets/images/battleitem.png";
import credits from "../../assets/images/credits.svg";
import magnifier from "../../assets/images/magnifier.svg";
import PointCounter from "../TechLab/PointCounter";
import Button from "../Common/Button";

const WeaponBox = () => {
	return (
		<div className="weaponbox">
			<TiltBox className="d-flex pt-4 pb-5 pe-5 align-items-start">
				<div className="weaponbox__pic">
					<img src={battleItem} alt="battleItem" />
					<img
						src={magnifier}
						alt="magnifier"
						className="weaponbox__pic-magnifier"
					/>
				</div>
				<div className="ms-5">
					<div className="weaponbox__title">
						<h1>Weapon Title</h1>
						<div className="d-flex">
							<img src={credits} alt="credits" />
							<p>10,000</p>
						</div>
					</div>
					<h6 className="weaponbox__description">
						With your basic rewards from staking GAME you are able to at least
						buy 10 Tech Points per day. 10 Tech Points are needed to revive
						yourself if.
					</h6>
					<div className="d-flex">
						<div className="weaponbox__value">
							<h1>1,560</h1>
							<p>Attack</p>
						</div>
						<div className="weaponbox__value">
							<h1>1,860</h1>
							<p>DEFENSE</p>
						</div>
						<div className="weaponbox__value no-bg">
							<h1>3,850</h1>
							<p>UPKEEP</p>
						</div>
					</div>
					<div className="weaponbox__counterbox">
						<PointCounter />
						<Button type="success">BUY</Button>
					</div>
					<div className="weaponbox__counterbox">
						<PointCounter />
						<Button type="danger">SELL</Button>
					</div>
				</div>
			</TiltBox>
		</div>
	);
};

export default WeaponBox;
