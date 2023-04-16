import { createSlice } from '@reduxjs/toolkit';
import { getGoogle } from '../thunks/getGoogle';

const googleSlice = createSlice({
	name: 'google',
	initialState: {
		isLoading: false,
		data: { location: {} },
		error: null,
	},
	extraReducers(builder) {
		builder.addCase(getGoogle.pending, (state, action) => {
			state.isLoading = true;
		});
		builder.addCase(getGoogle.fulfilled, (state, action) => {
			state.isLoading = false;
			state.data.location = action.payload;
		});
		builder.addCase(getGoogle.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.error;
		});
	},
});

export const googleReducer = googleSlice.reducer;
