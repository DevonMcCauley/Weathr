import { Fragment } from 'react';
import CoordinateForm from './components/CoordinateForm';
import ForecastList from './components/ForecastList';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

const App = () => {
	return (
		<Fragment>
			<Header />
			<div className="container h-100 pt-1 content-body">
				<div className="standard-bottom">
					<CoordinateForm />
					<ForecastList />
				</div>
			</div>
			<Footer />
		</Fragment>
	);
};
export default App;
