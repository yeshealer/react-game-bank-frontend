import React from "react";

const Main = ({ history }) => {
	const navigateTo = (value) => {
		history.push(`/${value}`);
	};

	return (
		<div className="main">
			<div
				className="main__div main__div_1"
				onClick={() => navigateTo("missions")}
			>
				<div className="main__title">MISSION</div>
			</div>
			<div
				className="main__div main__div_2"
				onClick={() => navigateTo("battle")}
			>
				<div className="main__title">BATTLE</div>
			</div>
			<div
				className="main__div main__div_3"
				onClick={() => navigateTo("armory")}
			>
				<div className="main__title">ARMORY</div>
			</div>
			<div
				className="main__div main__div_4"
				onClick={() => navigateTo("realestate")}
			>
				<div className="main__title">REAL ESTATE</div>
			</div>
			<div className="main__div main__div_5">
				<div className="main__title">LIQUIDATION ROOM</div>
			</div>
			<div
				className="main__div main__div_6"
				onClick={() => navigateTo("techlab")}
			>
				<div className="main__title">TECH LAB</div>
			</div>
			<div className="main__div main__div_7" onClick={() => navigateTo("bank")}>
				<div className="main__title">BANK</div>
			</div>
			<div
				className="main__div main__div_8"
				onClick={() => navigateTo("alliesenemies")}
			>
				<div className="main__title">ALLIES & ENEMIES</div>
			</div>
			<div
				className="main__div main__div_9"
				onClick={() => navigateTo("rankings")}
			>
				<div className="main__title">RANKINGS</div>
			</div>
			<div
				className="main__div main__div_10"
				onClick={() => navigateTo("tournamentraids")}
			>
				<div className="main__title">TOURNAMENTS & RAIDS</div>
			</div>
			<div
				className="main__div main__div_11"
				onClick={() => navigateTo("clans")}
			>
				<div className="main__title">CLANS</div>
			</div>
			<div
				className="main__div main__div_12"
				onClick={() => navigateTo("profile")}
			>
				<div className="main__title">PROFILE</div>
			</div>
		</div>
	);
};

export default Main;
