import React from "react";
import classNames from "classnames";

const FilterSection = () => {
	const [filterItem, setFilterItem] = React.useState(0);
	return (
		<div className="armorySection__filterBox">
			<div
				className={classNames("armorySection__filterItem", {
					"armorySection__filterItem-active": filterItem === 0,
				})}
				onClick={() => setFilterItem(0)}
			>
				small arms
			</div>
			<div
				className={classNames("armorySection__filterItem", {
					"armorySection__filterItem-active": filterItem === 1,
				})}
				onClick={() => setFilterItem(1)}
			>
				Vehicles
			</div>
			<div
				className={classNames("armorySection__filterItem", {
					"armorySection__filterItem-active": filterItem === 2,
				})}
				onClick={() => setFilterItem(2)}
			>
				air crafts
			</div>
			<div
				className={classNames("armorySection__filterItem", {
					"armorySection__filterItem-active": filterItem === 3,
				})}
				onClick={() => setFilterItem(3)}
			>
				mechs
			</div>
			<div
				className={classNames("armorySection__filterItem", {
					"armorySection__filterItem-active": filterItem === 4,
				})}
				onClick={() => setFilterItem(4)}
			>
				ships
			</div>
			<div
				className={classNames("armorySection__filterItem", {
					"armorySection__filterItem-active": filterItem === 5,
				})}
				onClick={() => setFilterItem(5)}
			>
				limited editions
			</div>
		</div>
	);
};

export default FilterSection;
