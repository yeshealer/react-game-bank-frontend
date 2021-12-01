import { ReactComponent as CoinbaseSVG } from "../assets/wallet/coinbase.svg";
import { ReactComponent as FormaticSVG } from "../assets/wallet/fortmatic.svg";
import { ReactComponent as MetaMaskSVG } from "../assets/wallet/metamask-color.svg";
import { ReactComponent as PortisSVG } from "../assets/wallet/portis.svg";
import { ReactComponent as WalletConnectSVG } from "../assets/wallet/wallet-connect.svg";

export const STORAGE_KEY_CONNECTOR = "CONNECTOR";

export const INFURA_PROJECT_ID = process.env.REACT_APP_INFURA_PROJECT_ID;

export const ConnectorNames = {
	Injected: "injected",
	WalletConnect: "walletconnect",
	WalletLink: "walletlink",
	Fortmatic: "fortmatic",
	Portis: "portis",
};

export const WALLET_ICONS = {
	[ConnectorNames.Injected]: MetaMaskSVG,
	[ConnectorNames.WalletConnect]: WalletConnectSVG,
	[ConnectorNames.WalletLink]: CoinbaseSVG,
	[ConnectorNames.Fortmatic]: FormaticSVG,
	[ConnectorNames.Portis]: PortisSVG,
};
