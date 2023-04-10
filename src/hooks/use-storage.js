import { useState, useCallback } from 'react';

// Sets and retrieves data in localstorage
export function useStorage() {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const accessStorage = useCallback(({ key, value, type }) => {
		setIsLoading(true);
		try {
			if (type === 'get') {
				console.log('here');
				return localStorage.getItem(key);
			} else if (type === 'set') {
				return localStorage.setItem(key, value);
			} else {
				throw new Error("A valid type must be entered: 'get' or 'set'");
			}
		} catch (err) {
			setError(err);
		}
		setIsLoading(false);
	}, []);

	return [accessStorage, isLoading, error];
}
