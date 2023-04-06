const ForecastListItem = ({ forecast }) => {
	console.log(forecast);
	return (
		<div className="col">
			<div className="card h-100">
				<div className="card-body">
					<h5 className="card-title text-center">{forecast.name}</h5>
					<p className="card-text">{forecast.detailedForecast}</p>
				</div>
			</div>
		</div>
	);
};

export default ForecastListItem;
