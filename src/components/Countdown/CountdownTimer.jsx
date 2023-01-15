// Libraries
import React from "react";

// Styling
import "./styling.css";

// Components
import { useCountdown } from "../../hooks/useCountdown";

/**
 * How the individual value and type is counted down.
 */
const DateTimeDisplay = ({ value, type }) => {
	return (
		<div className={"dateTimeDisplay"}>
			<h4>{value}</h4>
			<p>{type}</p>
		</div>
	);
};

/**
 * This is how the value and type is displayed with individual value and type.
 */
const ShowCounter = ({ days, hours, minutes, seconds }) => {
	return (
		// Section used to be div, div used to be p, but got caught in error?
		<section className={"showCounter"}>
			<div className={"countdownDisplay"}>
				<DateTimeDisplay value={days} type={"Days"} />

				<DateTimeDisplay value={hours} type={"Hours"} />

				<DateTimeDisplay value={minutes} type={"Mins"} />

				<DateTimeDisplay value={seconds} type={"Seconds"} />
			</div>
		</section>
	);
};

/**
 * This is the using the data from useCountdown to display the time.
 */
const CountdownTimer = ({ targetDate }) => {
	const [days, hours, minutes, seconds] = useCountdown(targetDate);
	return <ShowCounter days={days} hours={hours} minutes={minutes} seconds={seconds} />;
};

export default CountdownTimer;
