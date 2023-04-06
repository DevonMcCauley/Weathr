import { Fragment, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchForecast } from '../store';
import ForecastListItem from './ForecastListItem';
import { useThunk } from '../hooks/use-thunk';
import { toast } from 'react-toastify';
import { GlobeAmericas } from 'react-bootstrap-icons';

const ForecastList = () => {
	const [doFetchForecast, isLoading, error] = useThunk(fetchForecast);

	// Gets grid coordinates from state
	const coordinates = useSelector((state) => {
		return state.weather.data.coordinates;
	});

	// Gets forecast data from state
	const forecastData = useSelector((state) => {
		return state.weather.data.forecast;
	});

	useEffect(() => {
		if (coordinates.gridId) {
			// Calls fetchForecast to call the Weather API - returns a forecast
			doFetchForecast(coordinates);

			if (error) {
				toast.error(error.message);
			}
		}
	}, [coordinates, doFetchForecast, error]);

	let forecastListItems;

	forecastListItems = forecastData.map((forecast) => (
		<ForecastListItem key={forecast.number} forecast={forecast} />
	));
	if (forecastData.length < 1) {
		forecastListItems = (
			<div className="text-center w-100">
				<div className="col-12">
					Nothing yet! Try entering some coordinates!
				</div>
				<div className="col-12 mt-3">{<GlobeAmericas size={100} />}</div>
			</div>
		);
	}
	return (
		<div className="container mt-3 mt-md-5">
			<div className="row h-100 row-cols-1 row-cols-md-2 g-3">
				{forecastListItems}
			</div>
		</div>
	);
};

export default ForecastList;
