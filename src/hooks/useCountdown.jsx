// Libraries
import { useEffect, useState } from "react";

/**
 * This is the function taking the info from countDown and giving them an function to preform(?)
 */
const useCountdown = (targetDate) => {
	const countdownDate = new Date(targetDate).getTime();
	// console.log(countDownDate);

	const [countDown, setCountDown] = useState(countdownDate - new Date().getTime());

	// useEffect to give a specific function to run every time countDownDate is run.
	useEffect(() => {
		const interval = setInterval(() => {
			setCountDown(countdownDate - new Date().getTime());
		}, 1000);
		// setInterval subtracts targetDate from countDownDate for every interval(?)

		return () => clearInterval(interval);
	}, [countdownDate]);

	return getReturnValues(countDown);
};

/**
 * This is the function containing the days, hours, minutes and seconds.
 */
const getReturnValues = (countDown) => {
	// console.log(getReturnValues);

	// calculating time left
	// found on google. 1000 is 1 second, 60 is 1 minute, 60 is 1 hour, 24 is 1 day
	// Math.floor for no decimals
	const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
	const hours = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

	return [days, hours, minutes, seconds];
};

export { useCountdown };
