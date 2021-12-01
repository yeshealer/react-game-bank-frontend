import React from "react";
import PageTitle from "../../components/Common/PageTitle";
import TechLabBlock from "../../components/TechLab/TechLabBlock";
import Enhancement from "../../components/TechLab/Enhancement";
import MediPack from "../../components/TechLab/MediPack";
import line from "../../assets/images/line.svg";

const TechLab = () => {
	return (
		<div className="techlab">
			<PageTitle title="TECH LAB" />
			<TechLabBlock />
			<PageTitle title="Enhancement" />
			<Enhancement />
			<div className="techlab--line">
				<img src={line} alt="line" />
			</div>
			<PageTitle title="Medi Pack" />
			<MediPack />
		</div>
	);
};

export default TechLab;
