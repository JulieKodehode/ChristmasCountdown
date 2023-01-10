// Libraries
import React from "react";

// Styles
import "./styles/basic.css";
import "./App.css";

// Components
import CountdownTimer from "./components/Countdown/CountdownTimer";
import MessageToSanta from "./components/Message/MessageToSanta";

/**
 * Where everything gets connected.
 */
const App = () => {
	// Somehow this is NaN???
	const timeToChristmas = new Date("12/24/2023").getTime();
	// console.log(timeToChristmas); // Sat Dec 23 2023 00:00:00 GMT+0100 (Central European Standard Time) // 1703372400000

	// getTime() Gets the current time in milliseconds.
	const timeNow = new Date().getDate();
	// console.log(timeNow); // 1672746372692 // 5

	// timeNow + timeToChristmas = christmasTime aka SANTA IS CUMMING
	const christmasTime = timeNow + timeToChristmas;
	// console.log(christmasTime); // 1703372400005

	return (
		<main className="mainPage">
			<section className="countdown">
				<h1 className="heading">Nedtelling til jul</h1>
				<CountdownTimer targetDate={christmasTime} />
			</section>

			<section className="message">
				<h3 className="subHeading">Legg igjen en beskjed til julenissen</h3>
				<MessageToSanta />
			</section>
		</main>
	);
};

export default App;
