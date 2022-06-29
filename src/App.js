import { useState, useEffect } from "react";
import CoordinateForm from "./CoordinateForm";
import axios from "axios";
import Forecast from "./Forecast";
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";

function App() {
	const [forecast, setForecast] = useState([]);
	const [latitude, setLatitude] = useState("");
	const [longitude, setLongitude] = useState("");

	// Makes REST call to get the office and grid points
	const submitCoordinates = async (event) => {
		event.preventDefault();

		const url = `https://api.weather.gov/points/${latitude},${longitude}`;
		let response = await axios({
			method: "GET",
			url: url,
		});

		const office = response.data.properties.gridId;
		const gridX = response.data.properties.gridX;
		const gridY = response.data.properties.gridY;
		getForecast(office, gridX, gridY);
	};

	// Uses the office and grid points to get the forecast
	const getForecast = async (office, gridX, gridY) => {
		const url = `https://api.weather.gov/gridpoints/${office}/${gridX},${gridY}/forecast`;
		let response = await axios({
			method: "GET",
			url: url,
		});
		setForecast(response.data.properties.periods);
	};

	// Used to detect the user's location and set the Latitude and Longitude states
	const getLocation = () => {
		navigator.geolocation.getCurrentPosition((position) => {
			setLatitude(position.coords.latitude);
			setLongitude(position.coords.longitude);
		});
	};

	return (
		<Container className="text-center">
			<Row className="mt-4">
				{/* Renders the Coordinate input elements */}
				<CoordinateForm
					onSubmit={submitCoordinates}
					latitude={latitude}
					longitude={longitude}
					getLocation={getLocation}
					setLatitude={setLatitude}
					setLongitude={setLongitude}
				/>
			</Row>

			<Row className="mt-4">
				{/* Renders the forecast cards */}
				<Forecast forecast={forecast} />
			</Row>
		</Container>
	);
}
export default App;
