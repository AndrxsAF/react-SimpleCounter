import PropTypes from "prop-types";
import React from "react";
import TimeBox from "./TimeBox.jsx";
import TimeCard from "./TimeCard.jsx";

//create your first component
const Home = (props) => {
	return (
		<div>
			<TimeBox>
				<TimeCard
					value={
						<img
							src="https://img.icons8.com/dusk/64/000000/clock--v2.png"
							alt=""
						/>
					}
				/>
				<TimeCard value={props.years} />
				<TimeCard value={props.months} />
				<TimeCard value={props.days} />
				<TimeCard value={props.hours} />
				<TimeCard value={props.minutes} />
				<TimeCard value={props.seconds} />
			</TimeBox>
		</div>
	);
};

Home.propTypes = {
	seconds: PropTypes.number,
	minutes: PropTypes.number,
	hours: PropTypes.number,
	days: PropTypes.number,
	months: PropTypes.number,
	years: PropTypes.number,
};

export default Home;
