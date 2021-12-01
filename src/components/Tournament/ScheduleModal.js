import React from "react";
import { Modal, CloseButton } from "react-bootstrap";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import Calendar from "react-calendar";
import Select from "react-select";
import clock from "../../assets/images/clock.svg";
import Button from "../Common/Button";
import "react-calendar/dist/Calendar.css";

const options = [
	{ value: "18:00", label: "18:00" },
	{ value: "19:00", label: "19:00" },
	{ value: "20:00", label: "20:00" },
];

const ScheduleModal = () => {
	const [show, setShow] = React.useState(false);
	const [value, onChange] = React.useState(new Date());
	const handleClose = () => {
		setShow(false);
	};
	return (
		<div className="scheduleModal">
			<Button
				type="gradient"
				className="scheduleModal__Btn"
				icon={clock}
				onClick={() => setShow(true)}
			>
				SCHEDULE
			</Button>
			<Modal
				size="lg"
				show={show}
				onHide={handleClose}
				className="scheduleModal__content"
			>
				<div className="scheduleModal__body">
					<p className="scheduleModal__title">schedule</p>
					<CloseButton
						variant="white"
						className="scheduleModal__closeBtn"
						onClick={handleClose}
					/>
					<div className="scheduleModal__calendarBox">
						<div className="scheduleModal__header">
							<ChevronLeft />
							<p>Auguest 2021</p>
							<ChevronRight />
						</div>
						<div className="scheduleModal__calendarContainer">
							<Calendar
								onChange={onChange}
								value={value}
								showNavigation={false}
							/>
						</div>
						<div className="scheduleModal__timezone">
							<p>select time (utc)</p>
							<Select
								isMulti={false}
								classNamePrefix="select"
								options={options}
								defaultValue={options[0]}
							/>
						</div>
						<Button
							type="gradient"
							className="scheduleModal__scheduleBtn"
							icon={clock}
							onClick={handleClose}
						>
							SCHEDULE
						</Button>
					</div>
				</div>
			</Modal>
		</div>
	);
};

export default ScheduleModal;
