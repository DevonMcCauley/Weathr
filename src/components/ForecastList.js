import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchForecast } from '../store';

const ForecastList = () => {
	const dispatch = useDispatch();
	const [forecast, setForecast] = useState([]);

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
			setForecast(forecastData);
		}
	}, [coordinates, forecastData, dispatch]);

	let forecastListItems;

	forecastListItems = forecast.map((test) => {
		return test.name;
	});

	return (
		<div>
			<p>Forecasts</p>
			{forecastListItems}
		</div>
	);
};

export default ForecastList;
