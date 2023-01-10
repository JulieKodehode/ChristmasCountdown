// Libraries
import { useState, useEffect } from "react";

/**
 * This is the function that stores and retrieve the localStorage
 */
function getStorageValue(key, defaultValue) {
	// getting the stored value
	if (typeof window !== "undefined") {
		const saved = localStorage.getItem(key);
		const initial = saved !== null ? JSON.parse(saved) : defaultValue;
		return initial;
	}
}

export const useLocalStorage = (key, defaultValue) => {
	const [value, setValue] = useState(() => {
		return getStorageValue(key, defaultValue);
	});

	useEffect(() => {
		// storing values from inputs
		localStorage.setItem(key, JSON.stringify(value));
	}, [key, value]);

	return [value, setValue];
};
