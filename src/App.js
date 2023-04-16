import { Fragment, useEffect, useState } from 'react';
import CoordinateForm from './components/CoordinateForm';
import ForecastList from './components/ForecastList';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import { useThunk } from './hooks/use-thunk';
import { getGoogle } from './store';
import GeolocationSearch from './components/GeolocationSearch';
import { ArrowDownUp } from 'react-bootstrap-icons';

const App = () => {
	const [useGeolocation, setUseGeolocation] = useState(false);

	return (
		<Fragment>
			<Header />
			<div className="container h-100 pt-1 content-body standard-bottom">
				<div className="row d-flex align-items-baseline">
					<div className="col">
						{useGeolocation ? <CoordinateForm /> : <GeolocationSearch />}
					</div>
					<div className="col-2 col-md-1">
						<button
							type="button"
							title="Toggle Geolocation"
							className="btn btn-secondary"
							onClick={() => {
								setUseGeolocation(!useGeolocation);
							}}
						>
							<ArrowDownUp />
						</button>
					</div>
				</div>

				<ForecastList />
			</div>

			<Footer />
		</Fragment>
	);
};
export default App;
