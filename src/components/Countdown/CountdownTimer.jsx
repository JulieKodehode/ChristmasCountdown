// Libraries
import React from "react";

// Styling
import "./styling.css";

// Components
import { useCountdown } from "../../hooks/useCountdown";

// Step 1
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

// Step 2
/**
 * This is how the value and type is displayed with individual value and type.
 */
const ShowCounter = ({ days, hours, minutes, seconds }) => {
	return (
		// Section used to be div, div used to be p, but got caught in error?
		<section className={"showCounter"}>
			<div className={"countdownLink"}>
				<DateTimeDisplay value={days} type={"Days"} />

				<DateTimeDisplay value={hours} type={"Hours"} />

				{/* For some reason minutes not part of task??? BUT INCLUDE FOR PEACE OF MIND!!! */}
				<DateTimeDisplay value={minutes} type={"Mins"} />

				<DateTimeDisplay value={seconds} type={"Seconds"} />
			</div>
		</section>
	);
};

// Step 3
/**
 * This is the using the data from useCountdown to display the time.
 */
const CountdownTimer = ({ targetDate }) => {
	const [days, hours, minutes, seconds] = useCountdown(targetDate);
	return <ShowCounter days={days} hours={hours} minutes={minutes} seconds={seconds} />;
};

export default CountdownTimer;
