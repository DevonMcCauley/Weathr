import { useRef, useState } from "react";
import CoordinateForm from "./CoordinateForm";
import axios from "axios";
import Forecast from "./Forecast";
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";

function App() {
	const [forecast, setForecast] = useState([]);
	const latitudeRef = useRef();
	const longitudeRef = useRef();

	// Makes REST call to get the office and grid points
	const submitCoordinates = async (event) => {
		event.preventDefault();
		const lat = latitudeRef.current.value;
		const long = longitudeRef.current.value;

		const url = `https://api.weather.gov/points/${lat},${long}`;
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

	return (
		<Container className="text-center">
			<Row className="mt-4">
				{/* Renders the Coordinate input elements */}
				<CoordinateForm
					onSubmit={submitCoordinates}
					latitudeRef={latitudeRef}
					longitudeRef={longitudeRef}
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
