import React from "react";
import classNames from "classnames";
import raidVideo from "../../../assets/images/raid.mp4";
import usersIcon from "../../../assets/images/usersicon.svg";
import tiltProfilePic from "../../../assets/images/tilt-profile-pic.svg";
import winIcon from "../../../assets/images/winicon.svg";
import levelIcon from "../../../assets/images/levelIcon.png";
import xpIcon from "../../../assets/images/xpicon.svg";
import credits from "../../../assets/images/credits.svg";

const data = [
	{
		name: "MICHAEL JAMES",
		status: "HAS DIED!",
		AP: "2.5k",
		damage: "-700",
		class: "died",
	},
	{
		name: "GAL CORRY",
		status: "ATTACKED BY BOSS!",
		AP: "10.3k",
		damage: "-100",
		class: "attacked",
	},
	{
		name: "SHAY PASS",
		status: "LOST THE BATTLE!",
		AP: "3.1m",
		damage: "-300",
		class: "lost",
	},
	{
		name: "PASCAL LEVI",
		status: "WON THE BATTLE!",
		AP: "3.1k",
		damage: "+300",
		class: "won",
	},
	{
		name: "MICHAEL JAMES",
		status: "HAS DIED!",
		AP: "2.5k",
		damage: "-700",
		class: "died",
	},
	{
		name: "GAL CORRY",
		status: "ATTACKED BY BOSS!",
		AP: "10.3k",
		damage: "-100",
		class: "attacked",
	},
	{
		name: "SHAY PASS",
		status: "LOST THE BATTLE!",
		AP: "3.1m",
		damage: "-300",
		class: "lost",
	},
	{
		name: "PASCAL LEVI",
		status: "WON THE BATTLE!",
		AP: "3.1k",
		damage: "+300",
		class: "won",
	},
	{
		name: "MICHAEL JAMES",
		status: "HAS DIED!",
		AP: "2.5k",
		damage: "-700",
		class: "died",
	},
	{
		name: "GAL CORRY",
		status: "ATTACKED BY BOSS!",
		AP: "10.3k",
		damage: "-100",
		class: "attacked",
	},
	{
		name: "SHAY PASS",
		status: "LOST THE BATTLE!",
		AP: "3.1m",
		damage: "-300",
		class: "lost",
	},
	{
		name: "PASCAL LEVI",
		status: "WON THE BATTLE!",
		AP: "3.1k",
		damage: "+300",
		class: "won",
	},
];

const RaidOutline = () => {
	return (
		<div className="raidoutline row">
			<div className="col col-8 raidoutline__videoBlock">
				<video className="videoTag" autoPlay loop muted>
					<source src={raidVideo} type="video/mp4" />
					<source src={raidVideo} type="video/ogg" />
				</video>
			</div>
			<div className="col col-4 raidoutline__listBlock">
				<div className="raidoutline__listBlock__header">
					<img src={usersIcon} alt="usersIcon" />
					<p>538 users in raid</p>
				</div>
				<div className="raidoutline__infoBlock">
					<div>
						<img
							src={tiltProfilePic}
							alt="tiltProfilePic"
							className="raidoutline__infoBlock-profilepic"
						/>
					</div>
					<div className="w-100 ms-4">
						<div className="d-flex justify-content-between">
							<div className="raidoutline__infoBlock-win">
								<img src={winIcon} alt="winIcon" />
								<p>You won the battle!</p>
							</div>
							<div className="raidoutline__infoBlock-damage">
								<h6>Dmage</h6>
								<p>[+250]</p>
							</div>
						</div>
						<div className="d-flex justify-content-between">
							<div className="raidoutline__infoBlock-infoBox">
								<img src={levelIcon} alt="levelIcon" />
								<p>Level 102</p>
							</div>
							<div className="raidoutline__infoBlock-infoBox">
								<img src={xpIcon} alt="xpIcon" />
								<p>xP +12</p>
							</div>
							<div className="raidoutline__infoBlock-infoBox">
								<img src={credits} alt="credits" style={{ width: 16 }} />
								<h6>Level 102</h6>
							</div>
						</div>
					</div>
				</div>
				<div className="raidoutline__list">
					{data.map((item, index) => {
						return (
							<div className="raidoutline__list-item" key={index}>
								<div className="raidoutline__list-itemstatus">
									<h6>{item.name}</h6>
									<p className={classNames("ms-1", item.class)}>
										{item.status}
									</p>
								</div>

								<p>AP {item.AP}</p>
								<div className="raidoutline__list-itemstatus">
									<h6>Damage</h6>
									<p className={classNames("ms-1", item.class)}>
										[{item.damage}]
									</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default RaidOutline;
