import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import subtractIcon from "../../../assets/images/subtract.svg";

const EnhancementItem = ({ title, image }) => {
	return (
		<div className="enhancementItem">
			<OverlayTrigger
				placement="bottom-end"
				delay={{ show: 250, hide: 400 }}
				overlay={
					<Tooltip id="risk-tooltip">
						The risk is a financial formula comprised of the weight, standard
						deviations and covariances of the underlying assets in the LP pair.
					</Tooltip>
				}
			>
				<img
					src={subtractIcon}
					alt="subtractIcon"
					className="enhancementItem__subtract"
				/>
			</OverlayTrigger>

			<div>
				<img src={image} alt="battleItem" className="enhancementItem__logo" />
				<p>{title}</p>
			</div>
		</div>
	);
};

export default EnhancementItem;
