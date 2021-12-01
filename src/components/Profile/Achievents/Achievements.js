import React from "react";
import Slider from "react-slick";
import PageTitle from "../../Common/PageTitle";
import battleitem from "../../../assets/images/battleitem.png";
import next from "../../../assets/images/next.svg";
import prev from "../../../assets/images/prev.svg";

const Achievements = () => {
	const settings = {
		className: "center",
		centerMode: true,
		infinite: true,
		centerPadding: "0px",
		slidesToShow: 5,
		speed: 500,
		slidesToScroll: 1,
		dots: true,
		nextArrow: <img src={next} alt="next" />,
		prevArrow: <img src={prev} alt="prev" />,
	};

	const CustomSlide = ({ index, ...props }) => {
		return (
			<div {...props} className="achievements__boxbattle">
				<img src={battleitem} alt="battleitem" />
			</div>
		);
	};
	return (
		<div className="achievements">
			<PageTitle title="Achievements" />
			<div className="achievements__sliderBox">
				<Slider {...settings}>
					{[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => {
						return <CustomSlide index={item} />;
					})}
				</Slider>
			</div>
		</div>
	);
};

export default Achievements;
