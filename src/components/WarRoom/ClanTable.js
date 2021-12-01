import React from "react";

import rankingOne from "../../assets/images/ranking-one.svg";
import rankingTwo from "../../assets/images/ranking-two.svg";
import rankingThree from "../../assets/images/ranking-three.svg";
import picProfile from "../../assets/images/pic-profile.png";
import levelIcon from "../../assets/images/levelIcon.png";
import searchIcon from "../../assets/images/search-icon.svg";
import attack from "../../assets/images/attack.svg";
import Button from "../../components/Common/Button";

const ClanTable = ({ header }) => {
	return (
		<div className="clanTable">
			<div className="clanTable__header">
				<h6>#</h6>
				<p>{header}</p>
			</div>
			<div className="clanTable__box">
				<table class="table ">
					<thead>
						<tr>
							<th scope="col">CLAN</th>
							<th scope="col" className="text-center">
								Level
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className="text-center">
								<div className="clanTable__user">
									<img src={picProfile} alt="picProfile" />
									<p>james cal</p>
									<Button icon={attack} type="primary" className="ms-4" />
								</div>
							</td>
							<td className="text-center ">
								<div className="clanTable__level">
									<img src={levelIcon} alt="levelIcon" />
									<p>Level 120</p>
								</div>
							</td>
						</tr>
						<tr>
							<td className="text-center">
								<div className="clanTable__user">
									<img src={picProfile} alt="picProfile" />
									<p>james cal</p>
									<Button icon={attack} type="primary" className="ms-4" />
								</div>
							</td>
							<td className="text-center ">
								<div className="clanTable__level">
									<img src={levelIcon} alt="levelIcon" />
									<p>Level 120</p>
								</div>
							</td>
						</tr>
						<tr>
							<td className="text-center">
								<div className="clanTable__user">
									<img src={picProfile} alt="picProfile" />
									<p>james cal</p>
									<Button icon={attack} type="primary" className="ms-4" />
								</div>
							</td>
							<td className="text-center ">
								<div className="clanTable__level">
									<img src={levelIcon} alt="levelIcon" />
									<p>Level 120</p>
								</div>
							</td>
						</tr>
						<tr>
							<td className="text-center">
								<div className="clanTable__user">
									<img src={picProfile} alt="picProfile" />
									<p>james cal</p>
									<Button icon={attack} type="primary" className="ms-4" />
								</div>
							</td>
							<td className="text-center ">
								<div className="clanTable__level">
									<img src={levelIcon} alt="levelIcon" />
									<p>Level 120</p>
								</div>
							</td>
						</tr>
						<tr>
							<td className="text-center">
								<div className="clanTable__user">
									<img src={picProfile} alt="picProfile" />
									<p>james cal</p>
									<Button icon={attack} type="primary" className="ms-4" />
								</div>
							</td>
							<td className="text-center ">
								<div className="clanTable__level">
									<img src={levelIcon} alt="levelIcon" />
									<p>Level 120</p>
								</div>
							</td>
						</tr>
						<tr>
							<td className="text-center">
								<div className="clanTable__user">
									<img src={picProfile} alt="picProfile" />
									<p>james cal</p>
									<Button icon={attack} type="primary" className="ms-4" />
								</div>
							</td>
							<td className="text-center ">
								<div className="clanTable__level">
									<img src={levelIcon} alt="levelIcon" />
									<p>Level 120</p>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default ClanTable;
