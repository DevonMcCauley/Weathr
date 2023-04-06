import { createSlice } from '@reduxjs/toolkit';
import { fetchCoordinates } from '../thunks/fetchCoordinates';
import { fetchForecast } from '../thunks/fetchForecast';

const weatherSlice = createSlice({
	name: 'weather',
	initialState: {
		isLoading: false,
		data: { coordinates: [], forecast: [] },
		error: null,
	},
	extraReducers(builder) {
		builder.addCase(fetchCoordinates.pending, (state, action) => {
			state.isLoading = true;
		});
		builder.addCase(fetchCoordinates.fulfilled, (state, action) => {
			state.isLoading = false;
			state.data.coordinates = action.payload;
		});
		builder.addCase(fetchCoordinates.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.error;
		});
		builder.addCase(fetchForecast.pending, (state, action) => {
			state.isLoading = true;
		});
		builder.addCase(fetchForecast.fulfilled, (state, action) => {
			state.isLoading = false;
			state.data.forecast = action.payload;
		});
		builder.addCase(fetchForecast.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.error;
		});
	},
});

export const weatherReducer = weatherSlice.reducer;
