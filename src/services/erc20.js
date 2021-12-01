import { BigNumber, ethers } from "ethers";

const erc20Abi = [
	"function allowance(address owner, address spender) external view returns (uint256)",
	"function approve(address spender, uint256 amount) external returns (bool)",
	"function balanceOf(address marketMaker) external view returns (uint256)",
	"function symbol() external view returns (string)",
	"function name() external view returns (string)",
	"function decimals() external view returns (uint8)",
	"function transferFrom(address sender, address recipient, uint256 amount) public returns (bool)",
	"function transfer(address to, uint256 value) public returns (bool)",
	"function totalSupply() public view returns (uint)",
];

class ERC20Service {
	provider;
	contract;

	constructor(provider, signerAddress, tokenAddress) {
		this.provider = provider;
		if (signerAddress) {
			const signer = provider.getSigner();
			this.contract = new ethers.Contract(
				tokenAddress,
				erc20Abi,
				provider
			).connect(signer);
		} else {
			this.contract = new ethers.Contract(
				tokenAddress,
				erc20Abi,
				provider
			);
		}
	}

	get address() {
		return this.contract.address;
	}

	/**
	 * @returns A boolean indicating if `spender` has enough allowance to transfer `neededAmount` tokens from `spender`.
	 */
	hasEnoughAllowance = async (owner, spender, neededAmount) => {
		const allowance = await this.contract.allowance(owner, spender);
		return BigNumber.from(allowance).gte(neededAmount);
	};

	/**
	 * @returns The allowance given by `owner` to `spender`.
	 */
	allowance = async (owner, spender) => {
		const allowance = await this.contract.allowance(owner, spender);
		return BigNumber.from(allowance);
	};

	/**
	 * Approve `spender` to transfer `amount` tokens on behalf of the connected user.
	 */
	approve = async (spender, amount) => {
		const transactionObject = await this.contract.approve(spender, amount);
		return this.provider.waitForTransaction(transactionObject.hash);
	};

	/**
	 * Approve `spender` to transfer an "unlimited" amount of tokens on behalf of the connected user.
	 */
	approveUnlimited = async (spender) => {
		const transactionObject = await this.contract.approve(
			spender,
			ethers.constants.MaxUint256
		);
		return this.provider.waitForTransaction(transactionObject.hash);
	};

	balanceOf = async (address) => {
		const balance = await this.contract.balanceOf(address);
		return BigNumber.from(balance);
	};

	totalSupply = async () => {
		const totalSupply = await this.contract.totalSupply();
		return BigNumber.from(totalSupply);
	};

	hasEnoughBalanceToFund = async (owner, amount) => {
		const balance = await this.contract.balanceOf(owner);
		return BigNumber.from(balance).gte(amount);
	};
}

export { ERC20Service };
