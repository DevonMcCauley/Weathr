// weatherService.ts
import axios from 'axios';

interface WeatherData {
	properties: {
		gridId: string;
		gridX: number;
		gridY: number;
		relativeLocation: {
			properties: {
				city: string;
				state: string;
			};
		};
	};
}

interface Period {
	number: number;
	name: string;
	startTime: string;
	endTime: string;
	isDaytime: boolean;
	temperature: number;
	temperatureUnit: string;
	temperatureTrend: null;
	windSpeed: string;
	windDirection: string;
	icon: string;
	shortForecast: string;
	detailedForecast: string;
}
interface Forecast {
	periods: Period[];
	city: string;
	state: string;
}

export const getWeatherForecast = async (latitude: string, longitude: string) => {
	// Get the points from the latitude and longitude
	const { data } = await axios({
		method: 'GET',
		url: `https://api.weather.gov/points/${latitude},${longitude}`
	});
	// Process the response and return the forecast data
	return processResponse(data);
};

async function processResponse(weatherData: WeatherData): Promise<Forecast> {
	// Extract gridId, gridX, gridY, and fetch forecast

	// Get the GridId, GridX, and GridY from the response
	const { properties } = weatherData;
	const { gridId, gridX, gridY, relativeLocation } = properties;
	const location = relativeLocation.properties;
	const city = location.city;
	const state = location.state;

	// Use the GridId, GridX, and GridY to get the forecast
	const { data } = await axios({
		method: 'GET',
		url: `https://api.weather.gov/gridpoints/${gridId}/${gridX},${gridY}/forecast`
	});

	// Get the forecast from the response
	const { properties: forecastProperties } = data;
	const { periods } = forecastProperties;

	return { periods, city, state };
}
