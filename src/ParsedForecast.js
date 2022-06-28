const ParsedForecast = (props) => {
	const { forecast } = props;
	if (forecast.length < 1) {
		return <div>Nothing yet</div>;
	}
	const forecastTime = forecast[0].name;
	const forecastTemp = forecast[0].temperature;
	return (
		<div>
			{forecastTime}'s temperature is {forecastTemp} degrees
		</div>
	);
};

export default ParsedForecast;
