// Libraries
import React, { useState, useEffect } from "react";

// Style
import "./styling.css";

function MessageToSanta() {
	const [message, setMessage] = useState([]);
	const [newMessage, setNewMessage] = useState("");

	// To get the time for the message
	const timestamp = new Date().toDateString();

	// Getting a saved message from local storage
	const savedMessage = (newMessages) => {
		localStorage.setItem("message", JSON.stringify(newMessages));
	};

	useEffect(() => {
		if (localStorage.getItem("message")) {
			setMessage(JSON.parse(localStorage.getItem("message")));
		}
	}, []);

	// Adding the message to the display board
	// .trim() bak newMessage deleted
	const addMessage = () => {
		if (newMessage.trim()) {
			let newMessages = [...message, { message: newMessage, id: Date.now() }];
			setMessage(newMessages);
			setNewMessage("");
			savedMessage(newMessages);
		}
	};

	// Deleting a message from the display board
	const deleteMessage = (id) => {
		let newMessages = message.filter((message) => message.id !== id);
		setMessage(newMessages);
		savedMessage(newMessages);
	};

	return (
		<main>
			{/* Using a form because an input is a form element. */}
			<form>
				<input
					type="text"
					placeholder="Skriv en hilsen til julenissen!"
					value={newMessage}
					onChange={(event) => setNewMessage(event.target.value)}
				/>

				<button onClick={addMessage}>Send hilsen</button>
			</form>

			{/* Using a table to display side by side */}
			{/* MAYBE CHANGE TABLE??? */}
			<table>
				<tbody>
					{/* Using a map anon function to run through the messages and finding the correct message id to delete */}
					{message.map((message) => (
						<tr key={message.id}>
							<td>
								{timestamp}
								{/* Need CSS TO GIVE SPACE */}
								{message.message}
							</td>
							<td>
								<button onClick={() => deleteMessage(message.id)}>Slett hilsen</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</main>
	);
}

export default MessageToSanta;
