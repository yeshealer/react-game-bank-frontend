import { Button, Hidden, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import { WALLET_ICONS, ConnectorNames } from "../../../config/constants";
import React from "react";

const useStyles = makeStyles((theme) => ({
	root: {
		fontFamily: "Jost-600",
		fontSize: 30,
		width: '512px',
		padding: '29.75px 0',
		textTransform: "uppercase",
		color: theme.colors.white,
		background: 'rgba(0,0,0)',
		borderRadius: 0
	},
	iconWrapper: {
		width: theme.spacing(4),
		height: theme.spacing(4),
		marginRight: 16,
		borderRadius: "50%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		"& svg": {
			width: theme.spacing(5),
			height: theme.spacing(5),
		},
	},
}));

export const ConnectWalletButton = (props) => {
	const classes = useStyles();
	const Icon = WALLET_ICONS[ConnectorNames.Injected];

	return (
		<Button
			className={clsx(classes.root, props.className)}
			onClick={() => {
				props.onClick();
			}}
			variant="text"
		>
			<Hidden smDown>
				<div className={classes.iconWrapper}>
					<Icon />
				</div>
			</Hidden>
			Connect your wallet
		</Button>
	);
};
