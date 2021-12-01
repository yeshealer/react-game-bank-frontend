import React from "react";
import Outline from "../../components/Profile/Outline";
import Achievements from "../../components/Profile/Achievents";
import ArmorySection from "../../components/Profile/ArmorySection";
import line from "../../assets/images/line.svg";

const Profile = () => {
	return (
		<div className="profile">
			<Outline />
			<Achievements />
			<div className="profile--line">
				<img src={line} alt="line" />
			</div>
			<ArmorySection />
		</div>
	);
};

export default Profile;
