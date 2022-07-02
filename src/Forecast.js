import { Fragment, useState } from "react";
import ForecastList from "./ForecastList";
import Row from "react-bootstrap/Row";

const Forecast = (props) => {
	return (
		<Fragment>
			<Row className="mt-3">
				{/* Renders the forecast cards */}
				{props.daily && <ForecastList forecast={props.forecast} />}
				{/* Renders the forecast cards */}
				{!props.daily && (
					<ForecastList forecast={props.hourlyForecast} />
				)}
			</Row>
		</Fragment>
	);
};

export default Forecast;
