import React, { useState, useEffect } from "react";
import LoadingOverlay from "react-loading-overlay";

import { ConnectWalletButton } from "../../components/ConnectWallet";
import Button from "../../components/Common/Button";

import { useConnectedWeb3Context } from "../../contexts/connectedWeb3";
import { useGlobal } from "../../contexts/globalContext";

const ConnectWallet = (props) => {
    const {onContinue} = props;
	const { account } = useConnectedWeb3Context();
	const { toggleWalletConnectModal } = useGlobal();
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (account) {
			onContinue()
		}
	}, [account])
	return (
		<LoadingOverlay active={loading} spinner text="Waiting...">
			<div className="register">
				<div className="register__content">
                    <p>Welcome to Cryptoclysm</p>
                    <ConnectWalletButton
                        onClick={toggleWalletConnectModal}
                    />
				</div>
				<Button className="register__btn" type="warning" onClick={onContinue}>
					Next
				</Button>
			</div>
		</LoadingOverlay>
	);
};

export default ConnectWallet;
