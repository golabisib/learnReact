import { useEffect, useState } from "react";

const useLocalStorage = (key, initialValue) => {
	const [value, setValue] = useState(() => {
		const localState = localStorage.getItem(key);
		return localStorage ? JSON.parse(localState) : initialValue;
	});

	useEffect((key) => {
		localStorage.setItem(key, JSON.stringify(value));
	}, [value]);

	return [value, setValue];
};

export { useLocalStorage };
