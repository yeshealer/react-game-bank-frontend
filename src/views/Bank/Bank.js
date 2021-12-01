import React, { useState, useEffect, useCallback } from "react";
import { Switch, FormControlLabel } from "@material-ui/core";
import { BigNumber } from "@ethersproject/bignumber";
import { parseEther } from "@ethersproject/units";
import { formatBigNumber, formatToShortNumber } from "../../utils";
import LoadingOverlay from "react-loading-overlay";
import axios from "axios";
import PageTitle from "../../components/Common/PageTitle";
import BankInputField from "../../components/Bank/BankInputField";
import BankOutline from "../../components/Bank/BankOutline";
import credits from "../../assets/images/credits.svg";

import { useConnectedWeb3Context } from "../../contexts/connectedWeb3";
import { useGlobal } from "../../contexts/globalContext";
import { ethers } from "ethers";

const baseURL = "https://api.coingecko.com/api/v3";
const gameOneLpViperURL =
	"https://viper.exchange/#/add/ONE/0x491614c6d1A7cc8b0A3Ed0bBdecd35a0110c11e6";
const creditOneLpViperURL =
	"https://viper.exchange/#/add/ONE/0xDfb01A88D1e6099B42c9Bae38F8070027143b850";

const BankPage = () => {
	const { account } = useConnectedWeb3Context();
	const {
		bankService,
		gameTokenService,
		gameLpTokenService,
		creditLpTokenService,
		gameStakingRewardsService,
		gameLpStakingRewardsService,
		creditLpStakingRewardsService,
		creditTokenService,
	} = useGlobal();

	const [gameTokenBalance, setGameTokenBalance] = useState(BigNumber.from(0));
	const [gameTokenAllowance, setGameTokenAllowance] = useState(
		BigNumber.from(0)
	);
	const [gameLpTokenBalance, setGameLpTokenBalance] = useState(
		BigNumber.from(0)
	);
	const [gameLpTokenAllowance, setGameLpTokenAllowance] = useState(
		BigNumber.from(0)
	);
	const [creditLpTokenBalance, setCreditLpTokenBalance] = useState(
		BigNumber.from(0)
	);
	const [creditLpTokenAllowance, setCreditLpTokenAllowance] = useState(
		BigNumber.from(0)
	);
	const [gameStakedBalance, setGameStakedBalance] = useState(
		BigNumber.from(0)
	);
	const [gameLpStakedBalance, setGameLpStakedBalance] = useState(
		BigNumber.from(0)
	);
	const [creditLpStakedBalance, setCreditLpStakedBalance] = useState(
		BigNumber.from(0)
	);
	const [creditTokenBalance, setCreditTokenBalance] = useState(
		BigNumber.from(0)
	);
	const [reward, setReward] = useState(BigNumber.from(0));
	const [bankInfo, setBankInfo] = useState({
		tvl: BigNumber.from(0),
		apy: BigNumber.from(0),
		gameTVL: BigNumber.from(0),
		gameUSD: BigNumber.from(0),
		creditTVL: BigNumber.from(0),
		creditUSD: BigNumber.from(0),
	});

	const [isStake, setStake] = useState(true);
	const [loading, setLoading] = useState(false);

	const updateGameTokenInfo = useCallback(async () => {
		if (
			!account ||
			!gameTokenService ||
			!gameStakingRewardsService ||
			!bankService
		) {
			setGameTokenBalance(BigNumber.from(0));
			setGameTokenAllowance(BigNumber.from(0));
			setGameStakedBalance(BigNumber.from(0));
			return;
		}

		try {
			const [balance, allowance, stakedBalance] = await Promise.all([
				gameTokenService.balanceOf(account),
				gameTokenService.allowance(account, bankService.address),
				gameStakingRewardsService.balanceOf(account),
			]);

			setGameTokenBalance(balance);
			setGameTokenAllowance(allowance);
			setGameStakedBalance(stakedBalance);
		} catch (e) {
			console.log("error: ", e);
		}
	}, [account, gameTokenService, gameStakingRewardsService, bankService]);

	const updateGameLpTokenInfo = useCallback(async () => {
		if (
			!account ||
			!gameLpTokenService ||
			!gameLpStakingRewardsService ||
			!bankService
		) {
			setGameLpTokenBalance(BigNumber.from(0));
			setGameLpTokenAllowance(BigNumber.from(0));
			setGameLpStakedBalance(BigNumber.from(0));
			return;
		}

		try {
			const [balance, allowance, stakedBalance] = await Promise.all([
				gameLpTokenService.balanceOf(account),
				gameLpTokenService.allowance(account, bankService.address),
				gameLpStakingRewardsService.balanceOf(account),
			]);

			setGameLpTokenBalance(balance);
			setGameLpTokenAllowance(allowance);
			setGameLpStakedBalance(stakedBalance);
		} catch (e) {
			console.log("error: ", e);
		}
	}, [account, gameLpTokenService, gameLpStakingRewardsService, bankService]);

	const updateCreditLpTokenInfo = useCallback(async () => {
		if (
			!account ||
			!creditLpTokenService ||
			!creditLpStakingRewardsService ||
			!bankService
		) {
			setCreditLpTokenBalance(BigNumber.from(0));
			setCreditLpTokenAllowance(BigNumber.from(0));
			setCreditLpStakedBalance(BigNumber.from(0));
			return;
		}
		try {
			const [balance, allowance, stakedBalance] = await Promise.all([
				creditLpTokenService.balanceOf(account),
				creditLpTokenService.allowance(account, bankService.address),
				creditLpStakingRewardsService.balanceOf(account),
			]);

			setCreditLpTokenBalance(balance);
			setCreditLpTokenAllowance(allowance);
			setCreditLpStakedBalance(stakedBalance);
		} catch (e) {
			console.log("error: ", e);
		}
	}, [
		account,
		creditLpTokenService,
		creditLpStakingRewardsService,
		bankService,
	]);

	const updateCreditTokenInfo = useCallback(async () => {
		if (!account || !creditTokenService || !bankService) {
			setCreditTokenBalance(BigNumber.from(0));
			return;
		}

		try {
			const balance = await creditTokenService.balanceOf(account);

			setCreditTokenBalance(balance);
		} catch (e) {
			console.log("error: ", e);
		}
	}, [account, creditTokenService, bankService]);

	const updateRewardInfo = useCallback(async () => {
		if (
			!account ||
			!bankService ||
			!gameTokenService ||
			!gameLpTokenService ||
			!creditLpTokenService
		) {
			setReward(BigNumber.from(0));
			return;
		}

		try {
			const reward = await bankService.getPendingRewards(
				[
					gameTokenService.address,
					gameLpTokenService.address,
					creditLpTokenService.address,
				],
				account
			);

			setReward(reward);
		} catch (e) {
			console.log("error: ", e);
		}
	}, [
		account,
		gameTokenService,
		gameLpTokenService,
		creditLpTokenService,
		bankService,
	]);

	const updateBankInfo = useCallback(async () => {
		if (
			!gameTokenService ||
			!gameLpTokenService ||
			!creditLpTokenService ||
			!creditTokenService ||
			!gameStakingRewardsService ||
			!gameLpStakingRewardsService ||
			!creditLpStakingRewardsService ||
			!bankService
		) {
			return;
		}

		try {
			const [
				harmonyPriceData,
				gameTokenBalance,
				creditTokenBalance,
				gameLpTokenBalance,
				creditLpTokenBalance,
				gameLpTotalSupply,
				creditLpTotalSupply,
				[gameLpReserve0, gameLpReserve1],
				[creditLpReserve0, creditLpReserve1],
				gameRewardsPerYear,
				gameLpRewardsPerYear,
				creditLpRewardsPerYear,
			] = await Promise.all([
				axios.get(
					`${baseURL}/simple/price?ids=harmony&vs_currencies=usd`
				),
				gameTokenService.balanceOf(bankService.address),
				creditTokenService.balanceOf(bankService.address),
				gameLpTokenService.balanceOf(bankService.address),
				creditLpTokenService.balanceOf(bankService.address),
				gameLpTokenService.totalSupply(),
				creditLpTokenService.totalSupply(),
				gameLpTokenService.getReserves(),
				creditLpTokenService.getReserves(),
				gameStakingRewardsService.rewardPerYear(),
				gameLpStakingRewardsService.rewardPerYear(),
				creditLpStakingRewardsService.rewardPerYear(),
			]);

			// Harmony USD Price
			const harmonyPrice = parseEther(
				harmonyPriceData.data.harmony.usd.toString()
			);
			// Game USD Price (Reserve0: Game, Reserve1: Harmony)
			const gameTokenPrice = harmonyPrice
				.mul(gameLpReserve1)
				.div(gameLpReserve0);
			// Credit USD Price (Reserve0: Harmony, Reserve1: Credit)
			const creditTokenPrice = harmonyPrice
				.mul(creditLpReserve0)
				.div(creditLpReserve1);
			// GameLp USD Price
			const gameLpTokenPrice = harmonyPrice
				.mul(gameLpReserve1)
				.mul(2)
				.div(gameLpTotalSupply);
			// CreditLp USD Price
			const creditLpTokenPrice = harmonyPrice
				.mul(creditLpReserve0)
				.mul(2)
				.div(creditLpTotalSupply);

			const unit = parseEther("1");

			// TVL
			const tvl = gameTokenPrice
				.mul(gameTokenBalance)
				.add(creditTokenPrice.mul(creditTokenBalance))
				.add(gameLpTokenPrice.mul(gameLpTokenBalance))
				.add(creditLpTokenPrice.mul(creditLpTokenBalance))
				.div(creditTokenPrice);
			// APY
			const apy = gameRewardsPerYear
				.add(gameLpRewardsPerYear)
				.add(creditLpRewardsPerYear)
				.mul(unit)
				.mul(100)
				.div(tvl);

			setBankInfo({
				tvl: tvl,
				apy: apy,
				gameTVL: gameTokenBalance,
				gameUSD: gameTokenPrice.mul(gameTokenBalance).div(unit),
				creditTVL: creditTokenBalance,
				creditUSD: creditTokenPrice.mul(creditTokenBalance).div(unit),
			});
		} catch (e) {
			console.log("error: ", e);
		}
	}, [
		gameTokenService,
		gameLpTokenService,
		creditLpTokenService,
		creditTokenService,
		gameStakingRewardsService,
		gameLpStakingRewardsService,
		creditLpStakingRewardsService,
		bankService,
	]);

	useEffect(() => {
		updateGameTokenInfo();
	}, [updateGameTokenInfo]);
	useEffect(() => {
		updateGameLpTokenInfo();
	}, [updateGameLpTokenInfo]);
	useEffect(() => {
		updateCreditLpTokenInfo();
	}, [updateCreditLpTokenInfo]);
	useEffect(() => {
		updateCreditTokenInfo();
	}, [updateCreditTokenInfo]);
	useEffect(() => {
		updateRewardInfo();
	}, [updateRewardInfo]);
	useEffect(() => {
		updateBankInfo();
	}, [updateBankInfo]);

	// Game Token Stake / Unstake
	const handleGameBank = async (value, approved) => {
		setLoading(true);
		try {
			if (isStake) {
				if (approved) {
					await bankService.depositToken(
						gameTokenService.address,
						value,
						0
					);
				} else {
					await gameTokenService.approveUnlimited(
						bankService.address
					);
				}
			} else {
				await bankService.withdrawToken(
					gameTokenService.address,
					value,
					0
				);
			}
		} catch (_) {}
		updateGameTokenInfo();
		updateRewardInfo();
		setLoading(false);
		updateBankInfo();
	};

	// GameLp Token Stake / Unstake
	const handleGameLpBank = async (value, approved) => {
		setLoading(true);
		try {
			if (isStake) {
				if (approved) {
					await bankService.depositToken(
						gameLpTokenService.address,
						value,
						0
					);
				} else {
					await gameLpTokenService.approveUnlimited(
						bankService.address
					);
				}
			} else {
				await bankService.withdrawToken(
					gameLpTokenService.address,
					value,
					0
				);
			}
		} catch (_) {}
		updateGameLpTokenInfo();
		updateRewardInfo();
		setLoading(false);
		updateBankInfo();
	};

	// CreditLp Token Stake / Unstake
	const handleCreditLpBank = async (value, approved) => {
		setLoading(true);
		try {
			if (isStake) {
				if (approved) {
					await bankService.depositToken(
						creditLpTokenService.address,
						value,
						0
					);
				} else {
					await creditLpTokenService.approveUnlimited(
						bankService.address
					);
				}
			} else {
				await bankService.withdrawToken(
					creditLpTokenService.address,
					value,
					0
				);
			}
		} catch (_) {}
		updateCreditLpTokenInfo();
		updateRewardInfo();
		setLoading(false);
		updateBankInfo();
	};

	const handleClaimRewards = async () => {
		setLoading(true);
		try {
			await bankService.claimRewards(
				[
					gameTokenService.address,
					gameLpTokenService.address,
					creditLpTokenService.address,
				],
				true
			);
		} catch (_) {}
		updateRewardInfo();
		updateCreditTokenInfo();
		setLoading(false);
		updateBankInfo();
	};

	return (
		<LoadingOverlay active={loading} spinner text="Waiting...">
			<div className="bank">
				{/* <button onClick={onClickERC20}>onClickERC20</button> */}
				{/* <button onClick={getCreditBalance}>get Balance</button>
			<button onClick={withdrawToken}>Withdraw Token</button>
			<button onClick={claimReward}>Claim Token</button> */}

				<PageTitle title="Bank" />
				<div className="bank__credit">
					<div>
						<p>YOUR CREDIT</p>
					</div>
					<div className="d-flex">
						<img src={credits} alt="credits" />
						{
							<h4>
								{formatToShortNumber(
									formatBigNumber(creditTokenBalance)
								)}
							</h4>
						}
					</div>
				</div>
				<div className="bank__content">
					<div className="row flex-lg-row flex-column-reverse no-gutters">
						<div className="col">
							<FormControlLabel
								class="bank__switch"
								classes={{
									label: "bank__switch__label",
								}}
								control={
									<Switch
										checked={isStake}
										onChange={() => setStake(!isStake)}
										name="stake"
									/>
								}
								label={isStake ? "Stake" : "UnStake"}
							/>
							<BankInputField
								label="SINGLE STAKE GAME"
								placeholder="Enter amount"
								className="mt-5"
								btnLabel={isStake ? "Stake" : "Unstake"}
								otherBtnLabel="Approve"
								balance={
									isStake
										? gameTokenBalance
										: gameStakedBalance
								}
								allowance={
									isStake
										? gameTokenAllowance
										: ethers.constants.MaxUint256
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
											href={gameOneLpViperURL}
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
								balance={
									isStake
										? gameLpTokenBalance
										: gameLpStakedBalance
								}
								allowance={
									isStake
										? gameLpTokenAllowance
										: ethers.constants.MaxUint256
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
											href={creditOneLpViperURL}
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
								balance={
									isStake
										? creditLpTokenBalance
										: creditLpStakedBalance
								}
								allowance={
									isStake
										? creditLpTokenAllowance
										: ethers.constants.MaxUint256
								}
								handleClickButton={handleCreditLpBank}
							/>
							<BankInputField
								label="UNCLAIMED CREDIT"
								className="mt-5"
								btnLabel="Claim"
								otherBtnLabel="Claim"
								balance={reward}
								allowance={reward}
								nonEditable={true}
								handleClickButton={handleClaimRewards}
							/>
						</div>
						<div className="col d-flex justify-content-center justify-content-lg-end">
							<BankOutline bankInfo={bankInfo} />
						</div>
					</div>
				</div>
			</div>
		</LoadingOverlay>
	);
};

export default BankPage;
