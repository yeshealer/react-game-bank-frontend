import React from "react";

import Button from "../Common/Button";
import ScheduleModal from "./ScheduleModal";
import ProfilePic from "../../assets/images/pic-profile.png";
import bluePointer from "../../assets/images/blue-pointer.svg";
import redPointer from "../../assets/images/red-pointer.svg";

const TournamentTree = () => {
	return (
		<div className="tournamentTree">
			<div id="wrapper">
				<span class="label">
					<img
						src={ProfilePic}
						alt="ProfilePic"
						className="label__profilePic"
					/>
					Smart Contractors
					<img src={bluePointer} alt="bluePointer" className="label__point" />
				</span>
				<div class="branch lv1">
					<div class="entry">
						<span class="label">
							<img
								src={ProfilePic}
								alt="ProfilePic"
								className="label__profilePic"
							/>
							Smart Contractors
							<img
								src={bluePointer}
								alt="bluePointer"
								className="label__point"
							/>
						</span>
						<div class="branch lv2">
							<div class="entry">
								<span class="label">
									<img
										src={ProfilePic}
										alt="ProfilePic"
										className="label__profilePic"
									/>
									Smart Contractors
									<img
										src={bluePointer}
										alt="bluePointer"
										className="label__point"
									/>
								</span>
								<div class="branch lv3">
									<div class="entry">
										<span class="label">
											<img
												src={ProfilePic}
												alt="ProfilePic"
												className="label__profilePic"
											/>
											Smart Contractors
											<img
												src={bluePointer}
												alt="bluePointer"
												className="label__point"
											/>
										</span>
									</div>
									<div className="entry__schedule">
										<ScheduleModal />
									</div>
									<div class="entry">
										<span class="label">
											<img
												src={ProfilePic}
												alt="ProfilePic"
												className="label__profilePic"
											/>
											Smart Contractors
											<img
												src={bluePointer}
												alt="bluePointer"
												className="label__point"
											/>
										</span>
									</div>
								</div>
							</div>
							<div className="entry__semifinal">
								<h5>semi-final</h5>
								<p>18/5/2021 22:00</p>
							</div>
							<div class="entry">
								<span class="label">
									<img
										src={ProfilePic}
										alt="ProfilePic"
										className="label__profilePic"
									/>
									Smart Contractors
									<img
										src={bluePointer}
										alt="bluePointer"
										className="label__point"
									/>
								</span>
								<div class="branch lv3">
									<div class="entry">
										<span class="label">
											<img
												src={ProfilePic}
												alt="ProfilePic"
												className="label__profilePic"
											/>
											Smart Contractors
											<img
												src={bluePointer}
												alt="bluePointer"
												className="label__point"
											/>
										</span>
									</div>
									<div class="entry">
										<span class="label">
											<img
												src={ProfilePic}
												alt="ProfilePic"
												className="label__profilePic"
											/>
											Smart Contractors
											<img
												src={bluePointer}
												alt="bluePointer"
												className="label__point"
											/>
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="entry__final">
						<h4>final</h4>
						<p>18/5/2021 22:00</p>
					</div>
					<div class="entry">
						<span class="label">
							<img
								src={ProfilePic}
								alt="ProfilePic"
								className="label__profilePic"
							/>
							Smart Contractors
							<img
								src={bluePointer}
								alt="bluePointer"
								className="label__point"
							/>
						</span>
						<div class="branch lv2">
							<div class="entry">
								<span class="label">
									<img
										src={ProfilePic}
										alt="ProfilePic"
										className="label__profilePic"
									/>
									Smart Contractors
									<img
										src={bluePointer}
										alt="bluePointer"
										className="label__point"
									/>
								</span>
								<div class="branch lv3">
									<div class="entry">
										<span class="label">
											<img
												src={ProfilePic}
												alt="ProfilePic"
												className="label__profilePic"
											/>
											<img
												src={ProfilePic}
												alt="ProfilePic"
												className="label__profilePic"
											/>
											Smart Contractors
											<img
												src={bluePointer}
												alt="bluePointer"
												className="label__point"
											/>
											<img
												src={bluePointer}
												alt="bluePointer"
												className="label__point"
											/>
										</span>
									</div>

									<div class="entry">
										<span class="label">
											<img
												src={ProfilePic}
												alt="ProfilePic"
												className="label__profilePic"
											/>
											Smart Contractors
											<img
												src={bluePointer}
												alt="bluePointer"
												className="label__point"
											/>
										</span>
									</div>
								</div>
							</div>
							<div className="entry__semifinal">
								<h5>semi-final</h5>
								<p>18/5/2021 22:00</p>
							</div>
							<div class="entry">
								<span class="label">
									<img
										src={ProfilePic}
										alt="ProfilePic"
										className="label__profilePic"
									/>
									Smart Contractors
									<img
										src={bluePointer}
										alt="bluePointer"
										className="label__point"
									/>
								</span>
								<div class="branch lv3">
									<div class="entry">
										<span class="label">
											<img
												src={ProfilePic}
												alt="ProfilePic"
												className="label__profilePic"
											/>
											Smart Contractors
											<img
												src={bluePointer}
												alt="bluePointer"
												className="label__point"
											/>
										</span>
									</div>
									<div className="entry__schedule">
										<p>18/5/2021 22:00</p>
									</div>
									<div class="entry">
										<span class="label">
											<img
												src={ProfilePic}
												alt="ProfilePic"
												className="label__profilePic"
											/>
											Smart Contractors
											<img
												src={bluePointer}
												alt="bluePointer"
												className="label__point"
											/>
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TournamentTree;
