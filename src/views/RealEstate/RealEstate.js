import React from "react";
import classNames from "classnames";
import PageTitle from "../../components/Common/PageTitle";
import EstateBox from "../../components/RealEstate/EstateBox";

const RealEstate = () => {
	return (
		<div className="realestate">
			<PageTitle title="Real Estate" />
			<div className="realestate__weaponContainer row">
				<div className="col">
					<EstateBox />
				</div>
				<div className="col">
					<EstateBox />
				</div>
			</div>
			<div className="realestate__weaponContainer row">
				<div className="col">
					<EstateBox />
				</div>
				<div className="col">
					<EstateBox />
				</div>
			</div>
			<div className="realestate__weaponContainer row">
				<div className="col">
					<EstateBox />
				</div>
				<div className="col">
					<EstateBox />
				</div>
			</div>
			<div className="realestate__weaponContainer row">
				<div className="col">
					<EstateBox />
				</div>
				<div className="col">
					<EstateBox />
				</div>
			</div>
		</div>
	);
};

export default RealEstate;
