import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { weatherReducer } from './slices/weatherSlice';

// Creates the Redux store for the application
export const store = configureStore({
	reducer: {
		weather: weatherReducer,
	},
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware();
	},
});

setupListeners(store.dispatch);

// Weather
export * from './thunks/fetchCoordinates';
export * from './thunks/fetchForecast';
