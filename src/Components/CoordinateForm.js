// Buids the input fields for entering coordinates

import { useState } from 'react';
import { useLazyFetchForecastQuery } from '../store';

const CoordinateForm = () => {
	const [fetchForecast, { isLoading, isError }] = useLazyFetchForecastQuery();

	const [latitude, setLatitude] = useState('');
	const [longitude, setLongitude] = useState('');

	// Maintains control of latitude input
	const handleLatitudeChange = (event) => {
		setLatitude(event.target.value);
	};

	// Maintains control of longitude input
	const handleLongitudeChange = (event) => {
		setLongitude(event.target.value);
	};

	// Submits entered coordinates to the weather API
	const handleSubmit = async (event) => {
		event.preventDefault();
		fetchForecast({ latitude, longitude });
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="number"
				placeholder="Enter latitude"
				onChange={handleLatitudeChange}
				value={latitude}
				step={0.01}
			/>
			<input
				type="number"
				placeholder="Enter longitude"
				onChange={handleLongitudeChange}
				value={longitude}
				step={0.01}
			/>

			<button type="submit" className="w-100">
				Submit
			</button>
		</form>
	);
};
export default CoordinateForm;
