import React, { useEffect } from "react";
import classNames from "classnames";
import { formatEther, parseEther } from "@ethersproject/units";
import { formatBigNumber } from "../../../utils";

import Button from "../../Common/Button";

const BankInputField = ({
	className,
	label,
	placeholder,
	description,
	btnLabel,
	otherBtnLabel,
	balance,
	allowance,
	nonEditable,
	handleClickButton,
}) => {
	const [value, setValue] = React.useState("");
	const [approved, setApproved] = React.useState(true);
	const [disabled, setDisabled] = React.useState(false);

	useEffect(() => {
		// Allowance
		if (value) {
			if (parseEther(value).lte(allowance)) {
				setApproved(true);

				// Balance
				if (parseEther(value).lte(balance)) {
					setDisabled(false);
				} else {
					setDisabled(true);
				}
			} else {
				setApproved(false);
				setDisabled(false);
			}
		} else {
			setApproved(true);
			setDisabled(false);
		}
	}, [balance, allowance, value, nonEditable]);

	const onChange = (e) => {
		setValue(e.target.value);
	};

	const onClickBtn = () => {
		if (value !== "") {
			handleClickButton(parseEther(value), approved);
		} else if (nonEditable) {
			handleClickButton();
		}
	};

	const onClickMax = () => {
		setValue(formatEther(balance));
	};

	return (
		<>
			<div className={classNames("bankInputField", className)}>
				<div className="w-100">
					<label>
						{label}{" "}
						{!nonEditable &&
							`(Balance: ${formatBigNumber(balance)})`}
					</label>
					<div className="bankInputField__inputbox">
						{nonEditable ? (
							<div className="form-control">
								{formatBigNumber(balance, 18, 5)}
							</div>
						) : (
							<>
								<input
									className="form-control"
									placeholder={placeholder}
									value={value}
									type="number"
									onChange={onChange}
								/>
								<button onClick={onClickMax}>MAX</button>
							</>
						)}
					</div>
				</div>
				<Button
					className="bankInputField__btn"
					type={disabled ? "danger" : "warning"}
					onClick={onClickBtn}
					disabled={disabled}
				>
					{approved ? btnLabel : otherBtnLabel}
				</Button>
			</div>
			{description && (
				<div className="bankInputField__description">{description}</div>
			)}
		</>
	);
};

export default BankInputField;
