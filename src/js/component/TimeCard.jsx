import PropTypes from "prop-types";
import React from "react";

const TimeCard = (props) => {
	console.log(props.url);
	return (
		<div
			className="card text-white bg-dark border-light mx-1 my-0"
			style={{ minWidth: "4rem" }}>
			<div className="card-body d-flex align-items-center justify-content-center">
				<h1 className="m-0">{props.value}</h1>
			</div>
		</div>
	);
};

TimeCard.propTypes = {
	url: PropTypes.string,
};

export default TimeCard;
