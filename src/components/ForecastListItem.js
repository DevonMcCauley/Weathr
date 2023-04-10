import { Droplet, Moisture, ThermometerHalf } from 'react-bootstrap-icons';

// An inidividual Forecast Item
const ForecastListItem = ({ forecast }) => {
	const {
		detailedForecast,
		temperature,
		probabilityOfPrecipitation,
		relativeHumidity,
	} = forecast;

	// Turns the forecast data into an array for better maintainability
	const forecastData = [
		{
			icon: <ThermometerHalf />,
			value: temperature,
			unit: '\u00B0F',
		},
		{
			icon: <Droplet />,
			value: probabilityOfPrecipitation.value || 0,
			unit: '\u0025',
		},
		{
			icon: <Moisture />,
			value: relativeHumidity.value || 0,
			unit: '\u0025',
		},
	];

	// Iterates over the forecastData array to convert into JSX
	const renderedForecast = forecastData.map((data) => (
		<div className="col-4" key={data.value}>
			<div>{data.icon}</div>
			<div>
				{data.value}
				{data.unit ? data.unit : ''}
			</div>
		</div>
	));

	return (
		<div className="col">
			<div className="card h-100">
				<div className="card-body">
					<h5 className="card-title text-center">{forecast.name}</h5>
					<hr />
					<div className="row d-flex text-center">{renderedForecast}</div>
					<p className="card-text mt-2">{detailedForecast}</p>
				</div>
			</div>
		</div>
	);
};

export default ForecastListItem;
