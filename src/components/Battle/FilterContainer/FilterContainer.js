import React from "react";

import search from "../../../assets/images/search.svg";

const FilterContainer = () => {
	return (
		<div className="filterContainer">
			<div className="filterContainer__searchBox">
				<input
					className="form-control"
					type="text"
					placeholder="Search..."
					aria-label="Disabled input example"
				/>
				<img src={search} alt="search" />
			</div>
			<div className="filterContainer__btnBox">
				<button className="filterContainer__btn me-1 ms-1">LEVELS</button>
				<button className="filterContainer__btn me-1 ms-1">wins</button>
				<button className="filterContainer__btn me-1 ms-1">loses</button>
				<button className="filterContainer__btn me-1 ms-1">KILLES</button>
				<button className="filterContainer__btn me-1 ms-1">deaths</button>
			</div>
		</div>
	);
};

export default FilterContainer;
