import { BigNumber, ethers } from "ethers";

const bankABI = [
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "cryptoClysm",
				type: "address",
			},
		],
		name: "CryptoClysmSet",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "token",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "user",
				type: "address",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount",
				type: "uint256",
			},
		],
		name: "Deposited",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "tokenManager",
				type: "address",
			},
			{
				indexed: true,
				internalType: "bool",
				name: "enable",
				type: "bool",
			},
		],
		name: "OpenTokenManagerSet",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "token",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "from",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "to",
				type: "address",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount",
				type: "uint256",
			},
		],
		name: "OpenTokenTransfer",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "previousOwner",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "newOwner",
				type: "address",
			},
		],
		name: "OwnershipTransferred",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "token",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "user",
				type: "address",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount",
				type: "uint256",
			},
		],
		name: "RewardClaimed",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "token",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "user",
				type: "address",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount",
				type: "uint256",
			},
		],
		name: "Staked",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "token",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "stakingReward",
				type: "address",
			},
		],
		name: "StakingRewardSet",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "token",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "user",
				type: "address",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount",
				type: "uint256",
			},
		],
		name: "Unstaked",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "token",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "user",
				type: "address",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount",
				type: "uint256",
			},
		],
		name: "Withdrawn",
		type: "event",
	},
	{
		inputs: [
			{ internalType: "address", name: "stakingToken", type: "address" },
			{ internalType: "bool", name: "withdraw", type: "bool" },
		],
		name: "claimReward",
		outputs: [{ internalType: "uint256", name: "reward", type: "uint256" }],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address[]",
				name: "stakingTokens",
				type: "address[]",
			},
			{ internalType: "bool", name: "withdraw", type: "bool" },
		],
		name: "claimRewards",
		outputs: [{ internalType: "uint256", name: "reward", type: "uint256" }],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "creditToken",
		outputs: [{ internalType: "address", name: "", type: "address" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "cryptoClysm",
		outputs: [{ internalType: "address", name: "", type: "address" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "address", name: "token", type: "address" },
			{ internalType: "uint256", name: "stakeAmount", type: "uint256" },
			{ internalType: "uint256", name: "openAmount", type: "uint256" },
		],
		name: "depositToken",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "address", name: "stakingToken", type: "address" },
			{ internalType: "address", name: "user", type: "address" },
		],
		name: "getPendingReward",
		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address[]",
				name: "stakingTokens",
				type: "address[]",
			},
			{ internalType: "address", name: "user", type: "address" },
		],
		name: "getPendingRewards",
		outputs: [{ internalType: "uint256", name: "reward", type: "uint256" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "address", name: "creditToken_", type: "address" },
		],
		name: "initialize",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "address", name: "", type: "address" },
			{ internalType: "address", name: "", type: "address" },
		],
		name: "openTokenBalance",
		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [{ internalType: "address", name: "", type: "address" }],
		name: "openTokenManagers",
		outputs: [{ internalType: "bool", name: "", type: "bool" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "owner",
		outputs: [{ internalType: "address", name: "", type: "address" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "renounceOwnership",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "address", name: "cryptoClysm_", type: "address" },
		],
		name: "setCryptoClysm",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "address", name: "tokenManager", type: "address" },
			{ internalType: "bool", name: "enable", type: "bool" },
		],
		name: "setOpenTokenManager",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "address", name: "stakingToken", type: "address" },
			{ internalType: "address", name: "stakingReward", type: "address" },
		],
		name: "setStakingReward",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [{ internalType: "address", name: "", type: "address" }],
		name: "stakingRewards",
		outputs: [{ internalType: "address", name: "", type: "address" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "address", name: "token", type: "address" },
			{ internalType: "address", name: "from", type: "address" },
			{ internalType: "address", name: "to", type: "address" },
			{ internalType: "uint256", name: "amount", type: "uint256" },
		],
		name: "transferOpenToken",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "address", name: "newOwner", type: "address" },
		],
		name: "transferOwnership",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [{ internalType: "address", name: "", type: "address" }],
		name: "treasuryFunds",
		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "address", name: "token", type: "address" },
			{ internalType: "uint256", name: "unstakeAmount", type: "uint256" },
			{ internalType: "uint256", name: "openAmount", type: "uint256" },
		],
		name: "withdrawToken",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "address", name: "token", type: "address" },
			{ internalType: "address", name: "to", type: "address" },
			{ internalType: "uint256", name: "amount", type: "uint256" },
		],
		name: "withdrawTreasuryFunds",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
];

class BankService {
	provider;
	contract;

	constructor(provider, signerAddress, bankAddress) {
		this.provider = provider;
		if (signerAddress) {
			const signer = provider.getSigner();
			this.contract = new ethers.Contract(
				bankAddress,
				bankABI,
				provider
			).connect(signer);
		} else {
			this.contract = new ethers.Contract(bankAddress, bankABI, provider);
		}
	}

	get address() {
		return this.contract.address;
	}

	depositToken = async (token, stakeAmount, openAmount) => {
		const transactionObject = await this.contract.depositToken(
			token,
			stakeAmount,
			openAmount
		);
		return this.provider.waitForTransaction(transactionObject.hash);
	};

	withdrawToken = async (token, unstakeAmount, openAmount) => {
		const transactionObject = await this.contract.withdrawToken(
			token,
			unstakeAmount,
			openAmount
		);
		return this.provider.waitForTransaction(transactionObject.hash);
	};

	claimReward = async (stakingToken, withdraw) => {
		const transactionObject = await this.contract.claimReward(
			stakingToken,
			withdraw
		);
		return this.provider.waitForTransaction(transactionObject.hash);
	};

	claimRewards = async (stakingTokens, withdraw) => {
		const transactionObject = await this.contract.claimRewards(
			stakingTokens,
			withdraw
		);
		return this.provider.waitForTransaction(transactionObject.hash);
	};

	getPendingRewards = async (stakingTokens, account) => {
		const reward = await this.contract.getPendingRewards(
			stakingTokens,
			account
		);
		return BigNumber.from(reward);
	};
}

export { BankService };
