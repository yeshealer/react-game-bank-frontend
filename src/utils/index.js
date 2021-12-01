import { formatUnits } from "ethers/lib/utils";
import { getAddress } from "ethers/lib/utils";
import { BigNumber } from "ethers";

export const shortenAddress = (address) => {
	return `${address.substring(0, 6)}...${address.substring(
		address.length - 4
	)}`;
};

export const formatBigNumber = (value, decimals = 18, precision = 3) =>
	Number(formatUnits(value, decimals)).toFixed(precision);

export const formatToShortNumber = (number, decimals = 3) => {
	if (number.length < 1) {
		return "0";
	}

	const units = ["", "K", "M", "B", "T", "Q"];
	let unitIndex = 0;
	let rNumber = parseFloat(number.split(",").join(""));

	while (rNumber >= 1000 && unitIndex < 5 && unitIndex < units.length) {
		unitIndex += 1;
		rNumber = rNumber / 1000;
	}

	return `${parseFloat(rNumber.toFixed(decimals))}${units[unitIndex]}`;
};

export const numberWithCommas = (x) => {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const waitSeconds = (sec = 2) =>
	new Promise((resolve) => {
		setTimeout(() => {
			resolve();
		}, sec * 1000);
	});

export const isAddress = (address) => {
	try {
		getAddress(address);
	} catch (e) {
		return false;
	}
	return true;
};

export const isContract = async (provider, address) => {
	const code = await provider.getCode(address);
	return code && code !== "0x";
};
