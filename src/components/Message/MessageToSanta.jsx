// Libraries
import React, { useRef } from "react";
// Styling
import "./styling.css";

// Components
import { useLocalStorage } from "../../hooks/useLocalStorage";

const DisplayMessage = () => {
	// Getting the data from local storage to display it
	// let name = localStorage.getItem(name);
	// let message = localStorage.getItem(message);

	return (
		//EXAMPLE SOMETHING LIKE THIS
		<main>
			<p>
				<i>Julie 10:29, 10.01.23 - </i>
				<b>Velkommen til nedtelling!</b>
			</p>
			{/* <p>{name}</p>
			<p>{message}</p> */}
		</main>
	);
};

const MessageToSanta = () => {
	// useLocalStorage to get the component from hooks
	const [name, setName] = useLocalStorage("name", "");
	const [message, setMessage] = useLocalStorage("message", "");

	// useRef to use .current
	const nameRef = useRef(null);
	const messageRef = useRef(null);

	// A handle to prevent the page from refreshing on submit, and to clear the input fields after submit.
	const handleSubmit = (event) => {
		console.log("handleSubmit ran");
		event.preventDefault();
		event.target.reset();

		nameRef.current.value = "";
		messageRef.current.value = "";
	};

	return (
		<main>
			<form className="formMessage" onSubmit={handleSubmit}>
				<input
					className="formName"
					type="text"
					placeholder="Skriv navnet ditt her.."
					//
					ref={nameRef}
					value={name}
					onChange={(event) => setName(event.target.value)}></input>
				<textarea
					className="formText"
					cols="60"
					rows="5"
					placeholder="Skriv beskjeden din her.."
					//
					ref={messageRef}
					value={message}
					onChange={(event) => setMessage(event.target.value)}></textarea>
				<input className="formSubmit" type="submit"></input>
			</form>

			{/* Displaying the message with date and name stamp */}
			<DisplayMessage name={name} message={message} />
		</main>
	);
};

export default MessageToSanta;
