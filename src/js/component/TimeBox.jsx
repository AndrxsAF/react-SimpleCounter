import PropTypes from "prop-types";
import React from "react";

const TimeBox = (props) => {
	return (
		<div className="bg-dark d-flex justify-content-center py-5">
			{props.children}
		</div>
	);
};

TimeBox.propTypes = {
	children: PropTypes.node,
};

export default TimeBox;
