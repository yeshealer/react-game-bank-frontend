import { entries } from "../utils/type-utils";

import { INFURA_PROJECT_ID } from "./constants";

export const networkIds = {
	RINKEBY: 4,
	HARMONYMAINNET: 1666600000,
	HARMONYMAINNET1: 1666600001,
	HARMONYMAINNET2: 1666600002,
	HARMONYMAINNET3: 1666600003,
};

export const contracts = {
	bank: "bank",
	gameStaking: "gameStaking",
	gameToken: "gameToken",
	gameLpStaking: "gameLpStaking",
	gameLpToken: "gameLpToken",
	creditLpStaking: "creditLpStaking",
	creditLpToken: "creditLpToken",
	creditToken: "creditToken",
	cryptoClysm: "cryptoClysm",
};

const networks = {
	[networkIds.HARMONYMAINNET]: {
		label: "Harmony Mainnet",
		url: "https://api.harmony.one",
		contracts: {
			bank: "0x3121176946c727eD83402058f21A29821E45b0ac",
			gameStaking: "0x8E9363c92072035b77abc0270Af3872073b17354",
			gameToken: "0x491614c6d1A7cc8b0A3Ed0bBdecd35a0110c11e6",
			gameLpStaking: "0x1Bd7fe211d9eB15F95d88056a636006a79d7DD12",
			gameLpToken: "0x7f0b578f45789b374bbd514f4a4542107b39b37c",
			creditLpStaking: "0x283dC101787b5F66d1C2A80a498bb8CD7BaE76aa",
			creditLpToken: "0xb0990c4f8bcba2d854308f47f9e4e73d5d8793ea",
			creditToken: "0xDfb01A88D1e6099B42c9Bae38F8070027143b850",
			cryptoClysm: "",
		},
	},
	[networkIds.HARMONYMAINNET1]: {
		label: "Harmony Mainnet",
		url: "https://s1.api.harmony.one",
		contracts: {
			bank: "0x3121176946c727eD83402058f21A29821E45b0ac",
			gameStaking: "0x8E9363c92072035b77abc0270Af3872073b17354",
			gameToken: "0x491614c6d1A7cc8b0A3Ed0bBdecd35a0110c11e6",
			gameLpStaking: "0x1Bd7fe211d9eB15F95d88056a636006a79d7DD12",
			gameLpToken: "0x7f0b578f45789b374bbd514f4a4542107b39b37c",
			creditLpStaking: "0x283dC101787b5F66d1C2A80a498bb8CD7BaE76aa",
			creditLpToken: "0xb0990c4f8bcba2d854308f47f9e4e73d5d8793ea",
			creditToken: "0xDfb01A88D1e6099B42c9Bae38F8070027143b850",
			cryptoClysm: "",
		},
	},
	[networkIds.HARMONYMAINNET2]: {
		label: "Harmony Mainnet",
		url: "https://s2.api.harmony.one",
		contracts: {
			bank: "0x3121176946c727eD83402058f21A29821E45b0ac",
			gameStaking: "0x8E9363c92072035b77abc0270Af3872073b17354",
			gameToken: "0x491614c6d1A7cc8b0A3Ed0bBdecd35a0110c11e6",
			gameLpStaking: "0x1Bd7fe211d9eB15F95d88056a636006a79d7DD12",
			gameLpToken: "0x7f0b578f45789b374bbd514f4a4542107b39b37c",
			creditLpStaking: "0x283dC101787b5F66d1C2A80a498bb8CD7BaE76aa",
			creditLpToken: "0xb0990c4f8bcba2d854308f47f9e4e73d5d8793ea",
			creditToken: "0xDfb01A88D1e6099B42c9Bae38F8070027143b850",
			cryptoClysm: "",
		},
	},
	[networkIds.HARMONYMAINNET3]: {
		label: "Harmony Mainnet",
		url: "https://s3.api.harmony.one",
		contracts: {
			bank: "0x3121176946c727eD83402058f21A29821E45b0ac",
			gameStaking: "0x8E9363c92072035b77abc0270Af3872073b17354",
			gameToken: "0x491614c6d1A7cc8b0A3Ed0bBdecd35a0110c11e6",
			gameLpStaking: "0x1Bd7fe211d9eB15F95d88056a636006a79d7DD12",
			gameLpToken: "0x7f0b578f45789b374bbd514f4a4542107b39b37c",
			creditLpStaking: "0x283dC101787b5F66d1C2A80a498bb8CD7BaE76aa",
			creditLpToken: "0xb0990c4f8bcba2d854308f47f9e4e73d5d8793ea",
			creditToken: "0xDfb01A88D1e6099B42c9Bae38F8070027143b850",
			cryptoClysm: "",
		},
	},
	[networkIds.RINKEBY]: {
		label: "Rinkeby",
		url: `https://rinkeby.infura.io/v3/${INFURA_PROJECT_ID}`,
		contracts: {
			bank: "0x5ECdb6E6d0BA18d05b263D49717134ae9bCC2dC3",
			gameStaking: "0x7CeADA54c2b151bc53EbcE92444eF62301c7154B",
			gameToken: "0x85Ae0efe6237ccE03Ce5A1b3adcECbC85A4A1868",
			gameLpStaking: "0x7CeADA54c2b151bc53EbcE92444eF62301c7154B",
			gameLpToken: "0x85Ae0efe6237ccE03Ce5A1b3adcECbC85A4A1868",
			creditLpStaking: "0x7CeADA54c2b151bc53EbcE92444eF62301c7154B",
			creditLpToken: "0x85Ae0efe6237ccE03Ce5A1b3adcECbC85A4A1868",
			creditToken: "0x554DCc8bF737AcaC78Fe2F947430E0D46424db9c",
			cryptoClysm: "0xba171C8347EaB7e78C68382B13cEa6bF94b1b859",
		},
	},
};

export const supportedNetworkIds = Object.keys(networks).map(Number);

export const supportedNetworkURLs = entries(networks).reduce(
	(acc, [networkId, network]) => ({
		...acc,
		[networkId]: network.url,
	}),
	{}
);

const validNetworkId = (networkId) => {
	return networks[networkId] !== undefined;
};

export const getEtherscanURL = (networkId) => {
	if (!validNetworkId(networkId)) {
		throw new Error(`Unsupported network id: '${networkId}'`);
	}
	if (networkId === 1666600000) return "https://explorer.harmony.one/#/";
	if (networkId === 1666600001) return "https://explorer.harmony.one/#/";
	if (networkId === 1666600002) return "https://explorer.harmony.one/#/";
	if (networkId === 1666600003) return "https://explorer.harmony.one/#/";
	return "";
};

export const getContractAddress = (networkId, contract) => {
	if (!validNetworkId(networkId)) {
		throw new Error(`Unsupported network id: '${networkId}'`);
	}
	return networks[networkId].contracts[contract];
};
