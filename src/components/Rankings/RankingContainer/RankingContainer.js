import React from "react";

import rankingOne from "../../../assets/images/ranking-one.svg";
import rankingTwo from "../../../assets/images/ranking-two.svg";
import rankingThree from "../../../assets/images/ranking-three.svg";
import picProfile from "../../../assets/images/pic-profile.png";
import levelIcon from "../../../assets/images/levelIcon.png";
import searchIcon from "../../../assets/images/search-icon.svg";

const RankingContainer = ({ header }) => {
	return (
		<div className="rankingContainer">
			<div className="rankingContainer__header">
				{header} <img src={searchIcon} alt="searchIcon" />
			</div>
			<div className="rankingContainer__box">
				<table class="table ">
					<thead>
						<tr>
							<th scope="col" className="text-center">
								#
							</th>
							<th scope="col">User</th>
							<th scope="col" className="text-center">
								Level
							</th>
							<th scope="col" className="text-center">
								Points
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th scope="row" className="text-center">
								<p>1</p>
								<img src={rankingOne} alt="rankingOne" />
							</th>
							<td className="text-center">
								<div className="rankingContainer__user">
									<img src={picProfile} alt="picProfile" />
									<p>james cal</p>
								</div>
							</td>
							<td className="text-center ">
								<div className="rankingContainer__level">
									<img src={levelIcon} alt="levelIcon" />
									<p>Level 120</p>
								</div>
							</td>
							<td className="text-center rankingContainer__point">326</td>
						</tr>
						<tr>
							<th scope="row" className="text-center">
								<p>2</p>
								<img src={rankingTwo} alt="rankingOne" />
							</th>
							<td className="text-center">
								<div className="rankingContainer__user">
									<img src={picProfile} alt="picProfile" />
									<p>james cal</p>
								</div>
							</td>
							<td className="text-center ">
								<div className="rankingContainer__level">
									<img src={levelIcon} alt="levelIcon" />
									<p>Level 120</p>
								</div>
							</td>
							<td className="text-center rankingContainer__point">326</td>
						</tr>
						<tr>
							<th scope="row" className="text-center">
								<p>3</p>
								<img src={rankingThree} alt="rankingOne" />
							</th>
							<td className="text-center">
								<div className="rankingContainer__user">
									<img src={picProfile} alt="picProfile" />
									<p>james cal</p>
								</div>
							</td>
							<td className="text-center ">
								<div className="rankingContainer__level">
									<img src={levelIcon} alt="levelIcon" />
									<p>Level 120</p>
								</div>
							</td>
							<td className="text-center rankingContainer__point">326</td>
						</tr>
						<tr>
							<th scope="row" className="text-center">
								<p>4</p>
							</th>
							<td className="text-center">
								<div className="rankingContainer__user">
									<img src={picProfile} alt="picProfile" />
									<p>james cal</p>
								</div>
							</td>
							<td className="text-center ">
								<div className="rankingContainer__level">
									<img src={levelIcon} alt="levelIcon" />
									<p>Level 120</p>
								</div>
							</td>
							<td className="text-center rankingContainer__point">326</td>
						</tr>
						<tr>
							<th scope="row" className="text-center">
								<p>5</p>
							</th>
							<td className="text-center">
								<div className="rankingContainer__user">
									<img src={picProfile} alt="picProfile" />
									<p>james cal</p>
								</div>
							</td>
							<td className="text-center ">
								<div className="rankingContainer__level">
									<img src={levelIcon} alt="levelIcon" />
									<p>Level 120</p>
								</div>
							</td>
							<td className="text-center rankingContainer__point">326</td>
						</tr>
						<tr>
							<th scope="row" className="text-center">
								<p>6</p>
							</th>
							<td className="text-center">
								<div className="rankingContainer__user">
									<img src={picProfile} alt="picProfile" />
									<p>james cal</p>
								</div>
							</td>
							<td className="text-center ">
								<div className="rankingContainer__level">
									<img src={levelIcon} alt="levelIcon" />
									<p>Level 120</p>
								</div>
							</td>
							<td className="text-center rankingContainer__point">326</td>
						</tr>
						<tr>
							<th scope="row" className="text-center">
								<p>7</p>
							</th>
							<td className="text-center">
								<div className="rankingContainer__user">
									<img src={picProfile} alt="picProfile" />
									<p>james cal</p>
								</div>
							</td>
							<td className="text-center ">
								<div className="rankingContainer__level">
									<img src={levelIcon} alt="levelIcon" />
									<p>Level 120</p>
								</div>
							</td>
							<td className="text-center rankingContainer__point">326</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default RankingContainer;
