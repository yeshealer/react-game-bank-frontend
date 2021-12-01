import React from "react";
import Clock from "react-digital-clock";
import Button from "../../components/Common/Button";
import { ProgressBar } from "react-bootstrap";
import PageTitle from "../../components/Common/PageTitle";
import ClanTable from "../../components/WarRoom/ClanTable";
import WarUserTable from "../../components/WarRoom/WarUserTable";

const WarRoom = () => {
	return (
		<div className="warRoom">
			<PageTitle title="WarRoom" />
			<div className="row">
				<div className="col col-8 warRoom__left">
					<div className="warRoom__clockBlock">
						<Clock hour12={false} />
					</div>
					<div>
						<Button type="danger" className="warRoom__button mt-5">
							surrender
						</Button>
					</div>
					<div className="mt-5">
						<div className="warRoom__progressbarText">
							<p>clan 1</p>
							<p>clan 2</p>
						</div>
						<ProgressBar variant={"success"} now={85} />
					</div>
					<div className="row mt-5">
						<div className="col">
							<ClanTable header="12 clan 1" />
						</div>
						<div className="col">
							<ClanTable header="17 clan 2" />
						</div>
					</div>
				</div>
				<div className="col col-4 warRoom__right">
					<WarUserTable />
				</div>
			</div>
		</div>
	);
};

export default WarRoom;
