import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { weatherApi } from './apis/weatherApi';

// Creates the Redux store for the application
export const store = configureStore({
	reducer: {
		[weatherApi.reducerPath]: weatherApi.reducer,
	},
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware().concat(weatherApi.middleware);
	},
});

setupListeners(store.dispatch);

// Weather
export { useLazyFetchForecastQuery } from './apis/weatherApi';
