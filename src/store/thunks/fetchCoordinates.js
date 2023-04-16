import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Gets the user's coordinates required for the Weather API
const fetchCoordinates = createAsyncThunk(
	'weather/coordinates',
	async ({ latitude, longitude }) => {
		const response = await axios.get(
			`https://api.weather.gov/points/${latitude},${longitude}`
		);
		const { city, state } =
			response.data.properties.relativeLocation.properties;
		const { gridId, gridX, gridY } = response.data.properties;
		return { gridId, gridX, gridY, city, state };
	}
);

export { fetchCoordinates };
