// Buids the input fields for entering coordinates

import { useState } from 'react';
import { fetchCoordinates } from '../store';
import { useDispatch } from 'react-redux';
const CoordinateForm = () => {
	// const [doFetchUsers, isLoadingUsers, loadingUsersError] =
	// useThunk(fetchUsers);
	const dispatch = useDispatch();
	const [latitude, setLatitude] = useState('');
	const [longitude, setLongitude] = useState('');

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
		dispatch(fetchCoordinates({ latitude, longitude }));
	};

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
				<div className="col-12 col-md">
					<button type="submit" className="w-100 btn btn-primary">
						Submit
					</button>
				</div>
			</div>
		</form>
	);
};
export default CoordinateForm;
