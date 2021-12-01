import React from "react";

import Button from "../Common/Button";

import rankingOne from "../../assets/images/ranking-one.svg";
import rankingTwo from "../../assets/images/ranking-two.svg";
import rankingThree from "../../assets/images/ranking-three.svg";
import picProfile from "../../assets/images/pic-profile.png";
import levelIcon from "../../assets/images/levelIcon.png";
import searchIcon from "../../assets/images/search-icon.svg";
import attack from "../../assets/images/attack.svg";

const RankingTable = ({ header }) => {
	return (
		<div className="rankingTable">
			<div className="rankingTable__header rankingTable__header--rank">
				<p>Clans</p>
				{header} <img src={searchIcon} alt="searchIcon" />
			</div>
			<div className="rankingTable__box">
				<table class="table ">
					<thead>
						<tr>
							<th scope="col" className="text-center">
								#
							</th>
							<th scope="col">CLAN</th>
							<th scope="col" className="text-center">
								declare war
							</th>
							<th scope="col" className="text-center">
								Level
							</th>
							<th scope="col" className="text-center">
								LOSES
							</th>
							<th scope="col" className="text-center">
								SURRENDERS
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
								<div className="rankingTable__user">
									<img src={picProfile} alt="picProfile" />
									<p>james cal</p>
								</div>
							</td>
							<td className="text-center">
								<div className="rankingTable__battle">
									<Button icon={attack} type="primary">
										declare war
									</Button>
								</div>
							</td>
							<td className="text-center ">
								<div className="rankingTable__level">
									<img src={levelIcon} alt="levelIcon" />
									<p>Level 120</p>
								</div>
							</td>
							<td className="text-center rankingTable__point">326</td>
							<td className="text-center rankingTable__point">326</td>
						</tr>
						<tr>
							<th scope="row" className="text-center">
								<p>2</p>
								<img src={rankingTwo} alt="rankingOne" />
							</th>
							<td className="text-center">
								<div className="rankingTable__user">
									<img src={picProfile} alt="picProfile" />
									<p>james cal</p>
								</div>
							</td>
							<td className="text-center">
								<div className="rankingTable__battle">
									<Button icon={attack} type="primary">
										declare war
									</Button>
								</div>
							</td>
							<td className="text-center ">
								<div className="rankingTable__level">
									<img src={levelIcon} alt="levelIcon" />
									<p>Level 120</p>
								</div>
							</td>
							<td className="text-center rankingTable__point">326</td>
							<td className="text-center rankingTable__point">326</td>
						</tr>
						<tr>
							<th scope="row" className="text-center">
								<p>3</p>
								<img src={rankingThree} alt="rankingOne" />
							</th>
							<td className="text-center">
								<div className="rankingTable__user">
									<img src={picProfile} alt="picProfile" />
									<p>james cal</p>
								</div>
							</td>
							<td className="text-center">
								<div className="rankingTable__battle">
									<Button icon={attack} type="primary">
										declare war
									</Button>
								</div>
							</td>
							<td className="text-center ">
								<div className="rankingTable__level">
									<img src={levelIcon} alt="levelIcon" />
									<p>Level 120</p>
								</div>
							</td>
							<td className="text-center rankingTable__point">326</td>
							<td className="text-center rankingTable__point">326</td>
						</tr>
						<tr>
							<th scope="row" className="text-center">
								<p>4</p>
							</th>
							<td className="text-center">
								<div className="rankingTable__user">
									<img src={picProfile} alt="picProfile" />
									<p>james cal</p>
								</div>
							</td>
							<td className="text-center">
								<div className="rankingTable__battle">
									<Button icon={attack} type="primary">
										declare war
									</Button>
								</div>
							</td>
							<td className="text-center ">
								<div className="rankingTable__level">
									<img src={levelIcon} alt="levelIcon" />
									<p>Level 120</p>
								</div>
							</td>
							<td className="text-center rankingTable__point">326</td>
							<td className="text-center rankingTable__point">326</td>
						</tr>
						<tr>
							<th scope="row" className="text-center">
								<p>5</p>
							</th>
							<td className="text-center">
								<div className="rankingTable__user">
									<img src={picProfile} alt="picProfile" />
									<p>james cal</p>
								</div>
							</td>
							<td className="text-center">
								<div className="rankingTable__battle">
									<Button icon={attack} type="primary">
										declare war
									</Button>
								</div>
							</td>
							<td className="text-center ">
								<div className="rankingTable__level">
									<img src={levelIcon} alt="levelIcon" />
									<p>Level 120</p>
								</div>
							</td>
							<td className="text-center rankingTable__point">326</td>
							<td className="text-center rankingTable__point">326</td>
						</tr>
						<tr>
							<th scope="row" className="text-center">
								<p>6</p>
							</th>
							<td className="text-center">
								<div className="rankingTable__user">
									<img src={picProfile} alt="picProfile" />
									<p>james cal</p>
								</div>
							</td>
							<td className="text-center">
								<div className="rankingTable__battle">
									<Button icon={attack} type="primary">
										declare war
									</Button>
								</div>
							</td>
							<td className="text-center ">
								<div className="rankingTable__level">
									<img src={levelIcon} alt="levelIcon" />
									<p>Level 120</p>
								</div>
							</td>
							<td className="text-center rankingTable__point">326</td>
							<td className="text-center rankingTable__point">326</td>
						</tr>
						<tr>
							<th scope="row" className="text-center">
								<p>7</p>
							</th>
							<td className="text-center">
								<div className="rankingTable__user">
									<img src={picProfile} alt="picProfile" />
									<p>james cal</p>
								</div>
							</td>
							<td className="text-center">
								<div className="rankingTable__battle">
									<Button icon={attack} type="primary">
										declare war
									</Button>
								</div>
							</td>
							<td className="text-center ">
								<div className="rankingTable__level">
									<img src={levelIcon} alt="levelIcon" />
									<p>Level 120</p>
								</div>
							</td>
							<td className="text-center rankingTable__point">326</td>
							<td className="text-center rankingTable__point">326</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default RankingTable;
