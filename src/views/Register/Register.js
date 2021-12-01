import React, { useEffect, useState } from "react";
import ConnectWallet from './ConnectWallet'
import StakingOption from './StakingOption'
import Profile from './Profile'
import Character from './Character'
import Battle from './Battle'

import { useWeb3React } from "@web3-react/core";

const RegsiterPage = () => {
	const [pageIndex, setPageIndex] = useState(0);

	function onContinue() {
		setPageIndex(pageIndex + 1);
	}
	const { account } = useWeb3React();
	useEffect(() => {
		console.log(account);
	}, [account])
	switch(pageIndex) {
		case 0:
			return <ConnectWallet onContinue={onContinue} />
		case 1:
			return <StakingOption onContinue={onContinue} />
		case 2:
			return <Profile onContinue={onContinue} />
		case 3:
			return <Character onContinue={onContinue} />
		case 4:
			return <Battle />
		default: {
			setPageIndex(0)
			return <ConnectWallet onContinue={onContinue} />
		}
	}
};

export default RegsiterPage;
