import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const weatherApi = createApi({
	reducerPath: 'weather',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://api.weather.gov',
	}),
	endpoints(builder) {
		return {
			fetchForecast: builder.query({
				async queryFn(
					{ latitude, longitude },
					_queryApi,
					_extraOptions,
					fetchWithBQ
				) {
					const coordinates = await fetchWithBQ(
						`points/${latitude},${longitude}`
					);
					if (coordinates.error) return { error: coordinates.error };
					const {
						properties: { gridX, gridY, gridId },
					} = coordinates.data;
					const result = await fetchWithBQ(
						`gridpoints/${gridId}/${gridX},${gridY}`
					);
					return result.data ? { data: result.data } : { error: result.error };
				},
			}),
		};
	},
});

export const { useLazyFetchCoordinatesQuery, useLazyFetchForecastQuery } =
	weatherApi;
export { weatherApi };
