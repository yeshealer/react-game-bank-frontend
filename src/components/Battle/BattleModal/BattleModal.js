import React from "react";
import { ChevronDown, ChevronUp } from "react-bootstrap-icons";
import { Modal, CloseButton } from "react-bootstrap";
import playIcon from "../../../assets/images/play.png";
import refreshIcon from "../../../assets/images/refresh.svg";
import PicProfile from "../../../assets/images/pic-profile.png";
import levelIcon from "../../../assets/images/levelIcon.png";

const BattleModal = () => {
	const [show, setShow] = React.useState(false);

	const [downlist, setDownList] = React.useState(false);

	const handleClose = () => {
		setShow(false);
	};

	const handleDownList = () => {
		setDownList(!downlist);
	};

	return (
		<div className="battleModal">
			<button
				className="btn battleModal__battleBtn"
				onClick={() => setShow(true)}
			>
				<img src={playIcon} alt="playIcon" /> BATTLE
			</button>
			<Modal
				size="lg"
				show={show}
				onHide={handleClose}
				className="battleModal__content"
			>
				<div className="battleModal__body">
					<p className="battleModal__title">KA-BOOM!!!</p>
					<CloseButton
						variant="white"
						className="battleModal__closeBtn"
						onClick={handleClose}
					/>
					<p className="battleModal__subTitle">YOU WON THE BATTLE !!!</p>

					<div className="battleModal__vsWrapper">
						<div className="cardContainer battleModal__cardContainer battleModal__leftCard">
							<img
								src={PicProfile}
								alt="PicProfile"
								className="cardContainer__picProfile"
							/>
							<div>
								<p className="cardContainer__title">Warren Buffer</p>
								<div className="cardContainer__levelbox">
									<img src={levelIcon} alt="levelIcon" />
									<span>Level 102</span>
								</div>
								<div className="battleModal__progWrapper">
									<div className="battleModal__progress">
										<div
											class="battleModal__progressbar"
											role="progressbar"
											aria-valuenow="60"
											aria-valuemin="0"
											aria-valuemax="100"
										></div>
									</div>
									<p className="battleModal__progHeader">58%</p>
								</div>
							</div>
						</div>
						<div className="battleModal__vswrapper">
							<hr className="battleModal__vsline"></hr>
							<span className="battleModal__vstext">VS</span>
						</div>
						<div className="cardContainer battleModal__cardContainer battleModal__rightCard">
							<div>
								<p className="cardContainer__title">Donald Pump</p>
								<div className="cardContainer__levelbox">
									<img src={levelIcon} alt="levelIcon" />
									<span>Level 102</span>
								</div>
								<div className="battleModal__progWrapper">
									<div className="battleModal__progress battleModal__rightProg">
										<div
											class="battleModal__progressbar battleModal__rightProgbar"
											role="progressbar"
											aria-valuenow="60"
											aria-valuemin="0"
											aria-valuemax="100"
										></div>
									</div>
									<p className="battleModal__progHeader">50%</p>
								</div>
								<p className="battleModal__damage">a direct hit [-250hp]</p>
							</div>
							<img
								src={PicProfile}
								alt="PicProfile"
								className="cardContainer__picProfile battleModal__picProfile"
							/>
						</div>
					</div>

					<div className="battleModal__wrapper">
						<div className="battleModal__wrapperLine">
							<span className="battleModal__statement">
								LOOK AT YOUR SCORE ON THE STATS PAGE
							</span>
							<div className="battleModal__wrapperDotLine">
								<hr className="battleModal__line battleModal__commonLine"></hr>
								<hr className="battleModal__dot battleModal__commonLine"></hr>
							</div>
						</div>
					</div>

					<div className="battleModal__wrapper">
						<button className="btn battleModal__battleBtn">
							<img src={refreshIcon} alt="refreshIcon" /> REMATCH
						</button>
					</div>
					<div className="battleModal__wrapper">
						<div className="battleModal__wrapperLine">
							<button className="battleModal__btnMore" onClick={handleDownList}>
								<span className="battleModal__msDownList">
									{downlist ? (
										<ChevronDown color="white"></ChevronDown>
									) : (
										<ChevronUp color="white"></ChevronUp>
									)}
								</span>
								<span className="battleModal__statement battleModal__moredetail">
									More details
								</span>
							</button>
							<div className="battleModal__wrapperDotLine">
								<hr className="battleModal__line1 battleModal__commonLine"></hr>
								<hr className="battleModal__dot battleModal__commonLine"></hr>
							</div>
						</div>
					</div>
				</div>
			</Modal>
		</div>
	);
};

export default BattleModal;
