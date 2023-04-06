import CoordinateForm from './components/CoordinateForm';
import ForecastList from './components/ForecastList';

const App = () => {
	return (
		<div className="container">
			<div className="mt-4">
				<CoordinateForm />
				<ForecastList />
			</div>
			<div className="mt-3">{/* Switch */}</div>
		</div>
	);
};
export default App;
