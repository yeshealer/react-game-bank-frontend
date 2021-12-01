import { useWeb3React } from "@web3-react/core";
import { STORAGE_KEY_CONNECTOR } from "../../config/constants";
import React, { useEffect, useState } from "react";
import connectors from "../../utils/connectors";

const ConnectedWeb3Context = React.createContext({
	account: null,
	library: undefined,
	networkId: undefined,
	rawWeb3Context: undefined,
	initialized: false,
});

/**
 * This hook can only be used by components under the `ConnectedWeb3` component. Otherwise it will throw.
 */
export const useConnectedWeb3Context = () => {
	const context = React.useContext(ConnectedWeb3Context);

	if (!context) {
		throw new Error("Component rendered outside the provider tree");
	}

	return context;
};

/**
 * Component used to render components that depend on Web3 being available. These components can then
 * `useConnectedWeb3Context` safely to get web3 stuff without having to null check it.
 */
export const ConnectedWeb3 = (props) => {
	const context = useWeb3React();
	const { account, activate, active, chainId, deactivate, error, library } =
		context;
	const [initialized, setInitialized] = useState(false);

	const updateInitialized = () => {
		if (!initialized) setInitialized(true);
	};

	useEffect(() => {
		const connector = localStorage.getItem(STORAGE_KEY_CONNECTOR);
		if (error) {
			localStorage.removeItem(STORAGE_KEY_CONNECTOR);
			deactivate();
			updateInitialized();
		} else if (connector && Object.keys(connectors).includes(connector)) {
			if (!active) {
				activate(connectors[connector])
					.then(() => updateInitialized())
					.catch(() => updateInitialized());
			}
		} else {
			updateInitialized();
		}
		// eslint-disable-next-line
	}, [context, library, active, error]);

	const value = {
		account: account || null,
		library,
		networkId: chainId,
		rawWeb3Context: context,
		initialized,
	};

	return (
		<ConnectedWeb3Context.Provider value={value}>
			{props.children}
		</ConnectedWeb3Context.Provider>
	);
};

export const WhenConnected = (props) => {
	const { account } = useConnectedWeb3Context();

	return <>{account && props.children}</>;
};
