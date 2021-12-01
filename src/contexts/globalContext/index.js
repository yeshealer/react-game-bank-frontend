import { ConnectWalletModal } from "../../components/ConnectWallet";
import { LoadingModal } from "../../components/LoadingModal";
import { useConnectedWeb3Context } from "../connectedWeb3";
import React, { useEffect, useState } from "react";
import { BankService } from "../../services/bank";
import { ERC20Service } from "../../services/erc20";
import { LpTokenService } from "../../services/lpToken";
import { StakingRewardsService } from "../../services/stakingRewards";
import { CryptoClysmService } from "../../services/cryptoClysm";
import { getContractAddress, contracts } from "../../config/networks";

const GlobalContext = React.createContext({
	walletConnectModalOpened: false,
	isLoading: false,
	isRegistered: false,
	loadingText: "",
	bankService: null,
	gameTokenService: null,
	gameLpTokenService: null,
	creditLpTokenService: null,
	gameStakingRewardsService: null,
	gameLpStakingRewardsService: null,
	creditLpStakingRewardsService: null,
	creditTokenService: null,
	cryptoClysmService: null,
	toggleWalletConnectModal: () => {},
	setLoading: () => {},
});

export const useGlobal = () => {
	const context = React.useContext(GlobalContext);

	if (!context) {
		throw new Error("Component rendered outside the provider tree");
	}

	return context;
};

export const GlobalProvider = (props) => {
	const [state, setState] = useState({
		walletConnectModalOpened: false,
		isLoading: false,
		isRegistered: false,
		loadingText: "",
	});
	const { account, library: provider, networkId } = useConnectedWeb3Context();

	const loadAllData = async () => {
		// Contract Services
		if (networkId) {
			setState((prevState) => ({
				...prevState,
				bankService: new BankService(
					provider,
					account,
					getContractAddress(networkId, contracts.bank)
				),
				gameTokenService: new ERC20Service(
					provider,
					account,
					getContractAddress(networkId, contracts.gameToken)
				),
				gameLpTokenService: new LpTokenService(
					provider,
					account,
					getContractAddress(networkId, contracts.gameLpToken)
				),
				creditLpTokenService: new LpTokenService(
					provider,
					account,
					getContractAddress(networkId, contracts.creditLpToken)
				),
				gameStakingRewardsService: new StakingRewardsService(
					provider,
					account,
					getContractAddress(networkId, contracts.gameStaking)
				),
				gameLpStakingRewardsService: new StakingRewardsService(
					provider,
					account,
					getContractAddress(networkId, contracts.gameLpStaking)
				),
				creditLpStakingRewardsService: new StakingRewardsService(
					provider,
					account,
					getContractAddress(networkId, contracts.creditLpStaking)
				),
				creditTokenService: new ERC20Service(
					provider,
					account,
					getContractAddress(networkId, contracts.creditToken)
				),
				cryptoClysmService: new CryptoClysmService(
					provider,
					account,
					getContractAddress(networkId, contracts.cryptoClysm)
				),
			}));
		}

		// Account isRegistered
		if (account && state.cryptoClysmService) {
			const isRegistered = await state.cryptoClysmService.isRegistered(
				account
			);
			setState((prevState) => ({
				...prevState,
				isRegistered: isRegistered,
			}));
		} else {
			setState((prevState) => ({
				...prevState,
				isRegistered: false,
			}));
		}
	};

	useEffect(() => {
		loadAllData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [networkId, account, provider]);

	const toggleWalletConnectModal = () => {
		setState((prevState) => ({
			...prevState,
			walletConnectModalOpened: !prevState.walletConnectModalOpened,
		}));
	};

	const setLoading = (loading, loadingText) => {
		setState((prevState) => ({
			...prevState,
			isLoading: loading,
			loadingText: loadingText || "",
		}));
	};

	return (
		<GlobalContext.Provider
			value={{
				...state,
				toggleWalletConnectModal,
				setLoading,
			}}
		>
			{props.children}
			{state.walletConnectModalOpened && (
				<ConnectWalletModal
					onClose={toggleWalletConnectModal}
					visible={state.walletConnectModalOpened}
				/>
			)}
			{state.isLoading && (
				<LoadingModal
					onClose={() => setLoading(false)}
					text={state.loadingText}
					visible={state.isLoading}
				/>
			)}
		</GlobalContext.Provider>
	);
};
