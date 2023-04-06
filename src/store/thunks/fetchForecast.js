import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Gets the user's coordinates required for the Weather API
const fetchForecast = createAsyncThunk(
	'weather/forecast',
	async ({ gridId, gridX, gridY }) => {
		const response = await axios.get(
			`https://api.weather.gov/gridpoints/${gridId}/${gridX},${gridY}/forecast`
		);
		return response.data.properties.periods;
	}
);

export { fetchForecast };
