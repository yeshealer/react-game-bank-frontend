import { Button, Hidden, Typography, makeStyles } from "@material-ui/core";
import { toBech32 } from "@harmony-js/crypto";
import { WALLET_ICONS } from "../../../config/constants";
import React from "react";
import { shortenAddress } from "../../../utils";

const useStyles = makeStyles((theme) => ({
	root: {
		padding: "0 15px",
		height: 32,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		color: theme.colors.white,
		background: theme.colors.transparent,
		borderRadius: 8,
	},
	iconWrapper: {
		width: theme.spacing(2),
		height: theme.spacing(2),
		borderRadius: "50%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		marginRight: theme.spacing(1),
		"& svg": {
			width: theme.spacing(2),
			height: theme.spacing(2),
		},
	},
	address: {
		color: theme.colors.white,
		fontFamily: "Jost-600",
		fontSize: 15,
		lineHeight: "140.8%",
		letterSpacing: "0.01em",
		textTransform: "uppercase",
		fontWeight: 600,
	},
	icon: {
		color: theme.colors.third,
	},
	popover: {
		marginTop: 8,
		borderRadius: 8,
		background:
			"linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(223, 137, 134, 0.4) 40.1%), linear-gradient(180deg, rgba(237, 153, 154, 0.4) 0%, rgba(207, 231, 233, 0) 100%), #FFFFFF",
		boxShadow: "0px 4px 6px rgba(181, 93, 99, 0.16)",
	},
	popoverButton: {
		height: theme.spacing(5),
		minWidth: 134,
	},
}));

export const AccountInfo = (props) => {
	const classes = useStyles();
	const { address, icon } = props;

	const Icon = WALLET_ICONS[icon];

	return (
		<div>
			<Button className={classes.root}>
				<div className={classes.iconWrapper}>
					<Icon />
				</div>
				<Typography className={classes.address} component="span">
					{shortenAddress(toBech32(address))}
				</Typography>
			</Button>
		</div>
	);
};
