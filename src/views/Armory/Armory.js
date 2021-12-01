import React from "react";
import classNames from "classnames";
import PageTitle from "../../components/Common/PageTitle";
import FilterSection from "../../components/Armory/FilterSection";
import WeaponBox from "../../components/Armory/WeaponBox";

const Armory = () => {
	return (
		<div className="armory">
			<PageTitle title="Armory" />
			<FilterSection />
			<div className="armory__weaponContainer row">
				<div className="col">
					<WeaponBox />
				</div>
				<div className="col">
					<WeaponBox />
				</div>
			</div>
			<div className="armory__weaponContainer row">
				<div className="col">
					<WeaponBox />
				</div>
				<div className="col">
					<WeaponBox />
				</div>
			</div>
			<div className="armory__weaponContainer row">
				<div className="col">
					<WeaponBox />
				</div>
				<div className="col">
					<WeaponBox />
				</div>
			</div>
			<div className="armory__weaponContainer row">
				<div className="col">
					<WeaponBox />
				</div>
				<div className="col">
					<WeaponBox />
				</div>
			</div>
		</div>
	);
};

export default Armory;
