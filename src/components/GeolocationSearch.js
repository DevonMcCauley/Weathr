import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useThunk } from '../hooks/use-thunk';
import { fetchCoordinates, getGoogle } from '../store';

const GeolocationSearch = () => {
	const [location, setLocation] = useState('');
	const [latitude, setLatitude] = useState('');
	const [longitude, setLongitude] = useState('');

	const [doGetGoogle, isLoading, error] = useThunk(getGoogle);

	const [doFetchCoordinates, isLoadingForecast, isErrorForecast] =
		useThunk(fetchCoordinates);

	// Gets grid coordinates from state
	const coordinates = useSelector((state) => {
		return state.google.data.location;
	});

	useEffect(() => {
		if (coordinates.latitude) {
			setLatitude(coordinates.latitude);
			setLongitude(coordinates.longitude);

			// When there are coordinates available, submits them to the Weather API
			// In order to get the location coordinates and then the weather forecast
			doFetchCoordinates({
				latitude,
				longitude,
			});

			if (isErrorForecast) {
				toast.error(isErrorForecast.message);
			}
		}
	}, [coordinates, doFetchCoordinates, latitude, longitude, isErrorForecast]);

	// Sets the location from the controlled Location input
	const handleChange = (event) => {
		setLocation(event.target.value);
	};

	// After submitting, queries the Google Geolocation API
	// to get the latitude and longitude for the Weather API
	const handleSubmit = (event) => {
		event.preventDefault();
		doGetGoogle({ location });
	};

	return (
		<form className="container" onSubmit={handleSubmit}>
			<div className="row mt-md-1">
				<div className="col-12 col-md-8">
					<input
						className="form-control my-2 my-md-0"
						placeholder="Enter location"
						type="text"
						value={location}
						onChange={handleChange}
					/>
				</div>
				<div className="col-12 col-md">
					<button className="btn btn-primary w-100">Submit Location</button>
				</div>
			</div>
		</form>
	);
};

export default GeolocationSearch;
