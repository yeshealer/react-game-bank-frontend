import React, { useState } from "react";
import LoadingOverlay from "react-loading-overlay";

import Button from "../../components/Common/Button";
import BankInputField from "../../components/Bank/BankInputField";
import { ethers } from "ethers";

const StakingOption = (props) => {
	const { onContinue } = props;
	const [loading, setLoading] = useState(false);
	const [isStake, setStake] = useState(0);
	const handleGameBank = () => {};
	const handleGameLpBank = () => {};
	const handleCreditLpBank = () => {};
	const handleClaimRewards = () => {};
	return (
		<LoadingOverlay active={loading} spinner text="Waiting...">
			<div className="page2">
				<div className="page2-text">
					<div className="page2-title">
						Please choose one of our staking options
					</div>
					<div className="page2-content">
						You can choose 1 or more
					</div>
				</div>
				<div className="">
					<div className="flex-lg-row flex-column-reverse no-gutters page2-container">
						<div className="col">
							<BankInputField
								label="SINGLE STAKE GAME"
								placeholder="Enter amount"
								className="input_margin"
								btnLabel={isStake ? "Stake" : "Unstake"}
								otherBtnLabel="Approve"
								balance={isStake ? 0 : 0}
								allowance={
									isStake ? 0 : ethers.constants.MaxUint256
								}
								handleClickButton={handleGameBank}
							/>
							<BankInputField
								label="lP / GAME ONE"
								placeholder="Enter amount"
								description={
									<>
										Get your LP tokens for GAME/ONE{" "}
										<a
											href="#"
											target="_blank"
											rel="noreferrer"
										>
											HERE
										</a>
									</>
								}
								className="mt-5"
								btnLabel={isStake ? "Stake" : "Unstake"}
								otherBtnLabel="Approve"
								balance={isStake ? 0 : 0}
								allowance={
									isStake ? 0 : ethers.constants.MaxUint256
								}
								handleClickButton={handleGameLpBank}
							/>
							<BankInputField
								label="lP / CREDIT ONE"
								placeholder="Enter amount"
								description={
									<>
										Get your LP tokens for Credit/ONE{" "}
										<a
											href="#"
											target="_blank"
											rel="noreferrer"
										>
											HERE
										</a>
									</>
								}
								className="mt-5"
								btnLabel={isStake ? "Stake" : "Unstake"}
								otherBtnLabel="Approve"
								balance={isStake ? 0 : 0}
								allowance={
									isStake ? 0 : ethers.constants.MaxUint256
								}
								handleClickButton={handleCreditLpBank}
							/>
						</div>
					</div>
					<Button
						className="register__btn pagenext_btn"
						type="warning"
						onClick={onContinue}
					>
						Next
					</Button>
				</div>
			</div>
		</LoadingOverlay>
	);
};

export default StakingOption;
