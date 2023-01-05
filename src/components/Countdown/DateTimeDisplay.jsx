// Libraries
import React from "react";

// Styling
import "./styling.css";

/**
 * How the individual value and type is counted down.
 */
const DateTimeDisplay = ({ value, type }) => {
	return (
		<div className={"countdown"}>
			<p>{value}</p>
			<span>{type}</span>
		</div>
	);
};

export default DateTimeDisplay;
