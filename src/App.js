import { useRef, useState, useEffect } from "react";
import Form from "./Form";
import axios from "axios";
import ParsedForecast from "./ParsedForecast";

function App() {
	const [forecast, setForecast] = useState([]);
	const latitudeRef = useRef();
	const longitudeRef = useRef();

	const submitCoordinates = async (event) => {
		event.preventDefault();
		const lat = latitudeRef.current.value;
		const long = longitudeRef.current.value;

		// lat 44.250111
		// long -73.205772

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

	const getForecast = async (office, gridX, gridY) => {
		const url = `https://api.weather.gov/gridpoints/${office}/${gridX},${gridY}/forecast`;
		let response = await axios({
			method: "GET",
			url: url,
		});
		setForecast(response.data.properties.periods);
	};

	return (
		<div>
			<Form
				onSubmit={submitCoordinates}
				latitudeRef={latitudeRef}
				longitudeRef={longitudeRef}
			/>

			<ParsedForecast forecast={forecast} />
		</div>
	);
}

export default App;
