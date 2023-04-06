import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchForecast } from '../store';
import ForecastListItem from './ForecastListItem';

const ForecastList = () => {
	const dispatch = useDispatch();

	// Gets grid coordinates from state
	const coordinates = useSelector((state) => {
		return state.weather.data.coordinates;
	});

	// Gets forecast data from state
	const forecastData = useSelector((state) => {
		return state.weather.data.forecast;
	});

	useEffect(() => {
		const { gridId, gridX, gridY } = coordinates;
		if (gridId) {
			// Calls fetchForecast to call the Weather API - returns a forecast
			dispatch(fetchForecast({ gridId, gridX, gridY }));
		}
	}, [coordinates]);

	let forecastListItems;

	forecastListItems = forecastData.map((forecast) => (
		<ForecastListItem key={forecast.number} forecast={forecast} />
	));

	return (
		<div className="container mt-3 mt-md-5">
			<div className="row h-100 row-cols-1 row-cols-md-2 g-3">
				{forecastListItems}
			</div>
		</div>
	);
};

export default ForecastList;
