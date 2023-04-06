import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Gets the user's coordinates required for the Weather API
const fetchCoordinates = createAsyncThunk(
	'weather/coordinates',
	async ({ latitude, longitude }, { getState }) => {
		const response = await axios.get(
			`https://api.weather.gov/points/${latitude},${longitude}`
		);
		const { gridId, gridX, gridY } = response.data.properties;
		const coordinates = { gridId, gridX, gridY };
		return coordinates;
	}
);

// const fetchUserById = createAsyncThunk(
// 	'users/fetchByIdStatus',
// 	async (userId, { getState, requestId }) => {
// 		const { currentRequestId, loading } = getState().users;
// 		if (loading !== 'pending' || requestId !== currentRequestId) {
// 			return;
// 		}
// 		const response = await userAPI.fetchById(userId);
// 		return response.data;
// 	}
// );

export { fetchCoordinates };
