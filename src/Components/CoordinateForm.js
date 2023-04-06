// Buids the input fields for entering coordinates

import { useState } from 'react';
import { fetchCoordinates } from '../store';
import { useThunk } from '../hooks/use-thunk';
import { toast } from 'react-toastify';
import { GeoAlt } from 'react-bootstrap-icons';

const CoordinateForm = () => {
	const [latitude, setLatitude] = useState('');
	const [longitude, setLongitude] = useState('');
	const [doFetchCoordinates, isLoading, error] = useThunk(fetchCoordinates);

	if (error) {
		toast.error(error.message);
	}

	// Maintains control of latitude input
	const handleLatitudeChange = (event) => {
		setLatitude(event.target.value);
	};

	// Maintains control of longitude input
	const handleLongitudeChange = (event) => {
		setLongitude(event.target.value);
	};

	// Submits entered coordinates to the weather API
	const handleSubmit = async (event) => {
		event.preventDefault();
		doFetchCoordinates({ latitude, longitude });
	};

	// Gets the user's location automatically
	const handleGetLocation = () => {
		navigator.geolocation.getCurrentPosition((position) => {
			setLatitude(position.coords.latitude);
			setLongitude(position.coords.longitude);
		});

		// if (latitude === '' || longitude === '') {
		// 	toast.error('Cannot retrieve location. Location access may be blocked.');
		// }
	};

	let message = '';

	if (isLoading) {
		message = 'Loading...';
	}

	return (
		<form onSubmit={handleSubmit} className="container">
			<div className="row">
				<div className="col-12 col-md-4">
					<input
						className="form-control"
						type="number"
						placeholder="Enter latitude"
						onChange={handleLatitudeChange}
						value={latitude}
						step={0.01}
					/>
				</div>
				<div className="col-12 col-md-4 my-2 my-md-0">
					<input
						type="number"
						className="form-control"
						placeholder="Enter longitude"
						onChange={handleLongitudeChange}
						value={longitude}
						step={0.01}
					/>
				</div>
				<div className="col-12 col-md btn-group">
					<button
						type="button"
						className="w-25 btn btn-secondary d-flex h-100 align-items-center justify-content-center"
						title="Get Location"
						onClick={handleGetLocation}
					>
						<GeoAlt size={20} />
					</button>
					<button type="submit" className="w-100 btn btn-primary">
						Submit
					</button>
				</div>
			</div>
			{message}
		</form>
	);
};
export default CoordinateForm;
