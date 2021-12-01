import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { AccountInfo, ConnectWalletButton } from "../ConnectWallet";
import { useConnectedWeb3Context, useGlobal } from "../../contexts";
import { STORAGE_KEY_CONNECTOR } from "../../config/constants";
import profileIcon from "../../assets/images/profile.svg";
import homeIcon from "../../assets/images/home.svg";
import missionsIcon from "../../assets/images/missions.svg";
import battleIcon from "../../assets/images/battle.svg";
import armoryIcon from "../../assets/images/armory.svg";
import realestateIcon from "../../assets/images/buildings.svg";
import techlabIcon from "../../assets/images/techlab.svg";
import alliesIcon from "../../assets/images/allies.svg";
import closeIcon from "../../assets/images/close.svg";

const HeaderSidebarContent = ({
	onSetOpen,
	account,
	connector,
	toggleWalletConnectModal,
}) => {
	return (
		<div className="headersidebarcontent">
			<div className="headersidebarcontent__header">
				{/* <div className="headersidebarcontent__profile">
					<img src={profileIcon} alt="homeIcon" />
					Pascal James
				</div> */}
				<div className="me-3" onClick={onSetOpen}>
					<img src={closeIcon} alt="closeIcon" />
				</div>
			</div>
			<div className="headersidebarcontent__content">
				{!account ? (
					<div className="header__walletBtn">
						<ConnectWalletButton
							onClick={toggleWalletConnectModal}
						/>
					</div>
				) : (
					<div className="header__eth">
						<AccountInfo address={account} icon={connector || ""} />
					</div>
				)}
				{/* <Nav className="flex-column">
					<div>
						<Nav.Link as={NavLink} to="/home">
							<img src={homeIcon} alt="homeIcon" />
							Home
						</Nav.Link>
					</div>
					<div>
						<Nav.Link as={NavLink} to="/missions">
							<img src={missionsIcon} alt="homeIcon" />
							MISSIONS
						</Nav.Link>
					</div>
					<div>
						<Nav.Link as={NavLink} to="/battle">
							<img src={battleIcon} alt="homeIcon" />
							Battle
						</Nav.Link>
					</div>
					<div>
						<Nav.Link as={NavLink} to="/armory">
							<img src={armoryIcon} alt="homeIcon" />
							Armory
						</Nav.Link>
					</div>
					<div>
						<Nav.Link as={NavLink} to="/realestate">
							<img src={realestateIcon} alt="homeIcon" />
							Real estate
						</Nav.Link>
					</div>
					<div>
						<Nav.Link as={NavLink} to="/techlab">
							<img src={techlabIcon} alt="homeIcon" />
							Tech lab
						</Nav.Link>
					</div>
					<div>
						<Nav.Link as={NavLink} to="/alliesenemies">
							<img src={alliesIcon} alt="homeIcon" />
							Allies
						</Nav.Link>
					</div>
				</Nav> */}
			</div>
		</div>
	);
};

export default HeaderSidebarContent;
