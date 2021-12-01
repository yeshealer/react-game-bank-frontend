import React from "react";

import TiltBox from "../Common/TiltBox";
import battleItem from "../../assets/images/battleitem.png";
import credits from "../../assets/images/credits.svg";
import magnifier from "../../assets/images/magnifier.svg";
import PointCounter from "../TechLab/PointCounter";
import Button from "../Common/Button";

const EstateBox = () => {
	return (
		<div className="estatebox">
			<TiltBox className="d-flex pt-4 pb-5 pe-5 align-items-start">
				<div className="estatebox__pic">
					<img src={battleItem} alt="battleItem" />
					<img
						src={magnifier}
						alt="magnifier"
						className="estatebox__pic-magnifier"
					/>
				</div>
				<div className="ms-5">
					<div className="estatebox__title">
						<h1>Building Title</h1>
						<div className="d-flex">
							<img src={credits} alt="credits" />
							<p>10,000</p>
						</div>
					</div>
					<h6 className="estatebox__description">
						With your basic rewards from staking GAME you are able to at least
						buy 10 Tech Points per day. 10 Tech Points are needed to revive
						yourself if.
					</h6>
					<div className="d-flex">
						<div className="estatebox__value">
							<h1>10</h1>
							<p>level</p>
						</div>
						<div className="estatebox__value">
							<h1>100</h1>
							<p>INCOME</p>
						</div>
						<div className="estatebox__value no-bg">
							<h1>3,850</h1>
							<p>Upkeep</p>
						</div>
					</div>
					<div className="estatebox__counterbox">
						<PointCounter />
						<Button type="success">BUY</Button>
					</div>
					<div className="estatebox__counterbox">
						<PointCounter />
						<Button type="danger">SELL</Button>
					</div>
				</div>
			</TiltBox>
		</div>
	);
};

export default EstateBox;
