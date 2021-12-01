import { ethers } from "ethers";

const cryptoClysmABI = [
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "armoryNft",
				type: "address",
			},
		],
		name: "ArmoryNftSet",
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
				name: "user",
				type: "address",
			},
		],
		name: "Registered",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "user",
				type: "address",
			},
			{
				components: [
					{ internalType: "uint32", name: "hp", type: "uint32" },
					{ internalType: "uint32", name: "attack", type: "uint32" },
					{ internalType: "uint32", name: "defense", type: "uint32" },
					{ internalType: "uint32", name: "energy", type: "uint32" },
					{ internalType: "uint32", name: "stamina", type: "uint32" },
				],
				indexed: false,
				internalType: "struct UserPoints",
				name: "points",
				type: "tuple",
			},
		],
		name: "UserPointSet",
		type: "event",
	},
	{
		inputs: [],
		name: "armoryNft",
		outputs: [{ internalType: "address", name: "", type: "address" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "bank",
		outputs: [{ internalType: "address", name: "", type: "address" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "uint256", name: "armoryId", type: "uint256" },
			{ internalType: "uint256", name: "amount", type: "uint256" },
		],
		name: "buyArmory",
		outputs: [],
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
		inputs: [{ internalType: "address", name: "user", type: "address" }],
		name: "getUserStats",
		outputs: [
			{
				components: [
					{
						components: [
							{
								internalType: "uint64",
								name: "value",
								type: "uint64",
							},
							{
								internalType: "uint64",
								name: "lastUpdatedTime",
								type: "uint64",
							},
							{
								internalType: "uint64",
								name: "maxValue",
								type: "uint64",
							},
						],
						internalType: "struct TimeIncreaseValue",
						name: "energy",
						type: "tuple",
					},
					{
						components: [
							{
								internalType: "uint64",
								name: "value",
								type: "uint64",
							},
							{
								internalType: "uint64",
								name: "lastUpdatedTime",
								type: "uint64",
							},
							{
								internalType: "uint64",
								name: "maxValue",
								type: "uint64",
							},
						],
						internalType: "struct TimeIncreaseValue",
						name: "stamina",
						type: "tuple",
					},
					{
						internalType: "uint32",
						name: "techPoints",
						type: "uint32",
					},
					{ internalType: "uint64", name: "hp", type: "uint64" },
					{ internalType: "uint32", name: "level", type: "uint32" },
					{
						internalType: "uint64",
						name: "lastUpkeepPaidIndex",
						type: "uint64",
					},
					{ internalType: "uint32", name: "attack", type: "uint32" },
					{
						internalType: "uint32",
						name: "armoryAttack",
						type: "uint32",
					},
					{ internalType: "uint32", name: "defense", type: "uint32" },
					{
						internalType: "uint32",
						name: "armoryDefense",
						type: "uint32",
					},
					{
						internalType: "uint32",
						name: "alliance",
						type: "uint32",
					},
					{ internalType: "uint128", name: "exp", type: "uint128" },
					{
						internalType: "uint256",
						name: "upkeep",
						type: "uint256",
					},
					{
						internalType: "uint256",
						name: "unpaidUpkeep",
						type: "uint256",
					},
				],
				internalType: "struct UserStats",
				name: "",
				type: "tuple",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [{ internalType: "address", name: "user", type: "address" }],
		name: "hit",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "address", name: "bank_", type: "address" },
			{
				internalType: "uint32",
				name: "techPointsIncrementPerLevel_",
				type: "uint32",
			},
		],
		name: "initialize",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		name: "levels",
		outputs: [
			{ internalType: "uint32", name: "level", type: "uint32" },
			{ internalType: "uint32", name: "characterPoints", type: "uint32" },
			{
				internalType: "uint32",
				name: "hitXpGainPercentage",
				type: "uint32",
			},
			{
				internalType: "uint128",
				name: "xpForNextLevel",
				type: "uint128",
			},
		],
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
		inputs: [{ internalType: "address", name: "user", type: "address" }],
		name: "payUpkeep",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				components: [
					{ internalType: "uint32", name: "hp", type: "uint32" },
					{ internalType: "uint32", name: "attack", type: "uint32" },
					{ internalType: "uint32", name: "defense", type: "uint32" },
					{ internalType: "uint32", name: "energy", type: "uint32" },
					{ internalType: "uint32", name: "stamina", type: "uint32" },
				],
				internalType: "struct UserPoints",
				name: "points",
				type: "tuple",
			},
		],
		name: "register",
		outputs: [],
		stateMutability: "nonpayable",
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
			{ internalType: "uint256", name: "armoryId", type: "uint256" },
			{ internalType: "uint256", name: "amount", type: "uint256" },
		],
		name: "sellArmory",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "address", name: "armoryNft_", type: "address" },
		],
		name: "setArmoryNft",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				components: [
					{ internalType: "uint32", name: "hp", type: "uint32" },
					{ internalType: "uint32", name: "attack", type: "uint32" },
					{ internalType: "uint32", name: "defense", type: "uint32" },
					{ internalType: "uint32", name: "energy", type: "uint32" },
					{ internalType: "uint32", name: "stamina", type: "uint32" },
				],
				internalType: "struct UserPoints",
				name: "points",
				type: "tuple",
			},
		],
		name: "setUserPoints",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "techPointsIncrementPerLevel",
		outputs: [{ internalType: "uint32", name: "", type: "uint32" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "totalUsers",
		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		stateMutability: "view",
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
		name: "userPoints",
		outputs: [
			{ internalType: "uint32", name: "hp", type: "uint32" },
			{ internalType: "uint32", name: "attack", type: "uint32" },
			{ internalType: "uint32", name: "defense", type: "uint32" },
			{ internalType: "uint32", name: "energy", type: "uint32" },
			{ internalType: "uint32", name: "stamina", type: "uint32" },
		],
		stateMutability: "view",
		type: "function",
	},
];

class CryptoClysmService {
	provider;
	contract;

	constructor(provider, signerAddress, cryptoClysmAddress) {
		this.provider = provider;
		if (signerAddress) {
			const signer = provider.getSigner();
			this.contract = new ethers.Contract(
				cryptoClysmAddress,
				cryptoClysmABI,
				provider
			).connect(signer);
		} else {
			this.contract = new ethers.Contract(
				cryptoClysmAddress,
				cryptoClysmABI,
				provider
			);
		}
	}

	get address() {
		return this.contract.address;
	}

	armoryNft = async () => {
		const armoryNft = await this.contract.armoryNft();
		return armoryNft;
	};

	bank = async () => {
		const bank = await this.contract.bank();
		return bank;
	};

	creditToken = async () => {
		const creditToken = await this.contract.creditToken();
		return creditToken;
	};

	getUserStats = async (user) => {
		const userStats = await this.contract.getUserStats(user);
		return userStats;
	};

	isRegistered = async (user) => {
		try {
			const userStats = await this.contract.getUserStats(user);
			return userStats.level > 0;
		} catch {
			return false;
		}
	};

	levels = async (input) => {
		const levels = await this.contract.levels(input);
		return levels;
	};

	techPointsIncrementPerLevel = async () => {
		const techPointsIncrementPerLevel =
			await this.contract.techPointsIncrementPerLevel();
		return techPointsIncrementPerLevel;
	};

	totalUsers = async () => {
		const totalUsers = await this.contract.totalUsers();
		return totalUsers;
	};

	userPoints = async (user) => {
		const userPoints = await this.contract.userPoints(user);
		return userPoints;
	};

	buyArmory = async (armoryId, amount) => {
		const transactionObject = await this.contract.buyArmory(
			armoryId,
			amount
		);
		return this.provider.waitForTransaction(transactionObject.hash);
	};

	hit = async (user) => {
		const transactionObject = await this.contract.hit(user);
		return this.provider.waitForTransaction(transactionObject.hash);
	};

	payUpkeep = async (user) => {
		const transactionObject = await this.contract.payUpkeep(user);
		return this.provider.waitForTransaction(transactionObject.hash);
	};

	register = async (points) => {
		const transactionObject = await this.contract.register(points);
		return this.provider.waitForTransaction(transactionObject.hash);
	};

	sellArmory = async (armoryId, amount) => {
		const transactionObject = await this.contract.sellArmory(
			armoryId,
			amount
		);
		return this.provider.waitForTransaction(transactionObject.hash);
	};

	setUserPoints = async (points) => {
		const transactionObject = await this.contract.setUserPoints(points);
		return this.provider.waitForTransaction(transactionObject.hash);
	};
}

export { CryptoClysmService };
