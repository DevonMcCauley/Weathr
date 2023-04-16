import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { weatherReducer } from './slices/weatherSlice';
import { googleReducer } from './slices/googleSlice';

// Creates the Redux store for the application
export const store = configureStore({
	reducer: {
		weather: weatherReducer,
		google: googleReducer,
	},
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware();
	},
});

setupListeners(store.dispatch);

// Weather
export * from './thunks/fetchCoordinates';
export * from './thunks/fetchForecast';
export * from './thunks/getGoogle';
