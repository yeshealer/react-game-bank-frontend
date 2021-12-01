import React from "react";
import { useHistory } from "react-router-dom";
import Clock from "react-digital-clock";
import TiltBox from "../Common/TiltBox";
import Button from "../Common/Button";
import Parallegogram from "../Common/Parallegogram";
import profilePic from "../../assets/images/pic-profile.png";
import messages from "../../assets/images/messages.svg";
import chat from "../../assets/images/chat.svg";
import attack from "../../assets/images/attack.svg";

const Contracts = () => {
	const history = useHistory();

	const onClickRank = () => {
		history.push("/clanrank");
	};

	const onBattle = () => {
		history.push("/warroom");
	};
	return (
		<div className="contracts">
			<TiltBox>
				<div className="contracts__content">
					<img
						src={profilePic}
						alt="profilePic"
						className="contracts__profilePic"
					/>
					<div className="contracts__info">
						<div>
							<Button icon={messages} type="gradient">
								incoming messages
							</Button>
							<Button icon={chat} type="gradient" className="ms-3">
								chat clan
							</Button>
						</div>
						<div>
							<Parallegogram className="contracts__rank" onClick={onClickRank}>
								<h5>clan rank</h5> <p>#</p> <h5>12</h5>
							</Parallegogram>
							<div className="d-flex">
								<div className="contracts__value">
									<h1>100</h1>
									<p>wins</p>
								</div>
								<div className="contracts__value">
									<h1>25</h1>
									<p>loses</p>
								</div>
								<div className="contracts__value no-bg">
									<h1>326</h1>
									<p>SURRENDERS</p>
								</div>
							</div>
						</div>
					</div>
					<div className="contracts__controller">
						<div className="contracts__clockBlock">
							<Clock hour12={false} />
						</div>
						<Button
							icon={attack}
							type="primary"
							className="mt-5 me-3"
							onClick={onBattle}
						>
							Battle
						</Button>
					</div>
				</div>
			</TiltBox>
		</div>
	);
};

export default Contracts;
