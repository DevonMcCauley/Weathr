import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ButtonGroup from "react-bootstrap/ButtonGroup";

// Buids the input fields for entering coordinates
// Returns Refs to the <App /> component to process
const CoordinateForm = (props) => {
	
	// Maintains control of latitude input
	const handleLatitudeChange = (event) => {
		props.setLatitude(event.target.value);
	};

	// Maintains control of longitude input
	const handleLongitudeChange = (event) => {
		props.setLongitude(event.target.value);
	};

	return (
		<Form onSubmit={props.onSubmit}>
			<Container>
				<Row>
					<Col sm={12} md={6} lg={5}>
						<Form.Control
							type="text"
							placeholder="Enter latitude"
							onChange={handleLatitudeChange}
							value={props.latitude}
						/>
					</Col>
					<Col sm={12} md={6} lg={5} className="my-2 my-md-0">
						<Form.Control
							type="text"
							placeholder="Enter longitude"
							onChange={handleLongitudeChange}
							value={props.longitude}
						/>
					</Col>
					<Col sm={12} lg={2} className="mt-md-2 mt-lg-0">
						<ButtonGroup className="w-100">
							<Button
								variant="warning"
								onClick={props.getLocation}
							>
								<i className="bi bi-geo-alt"></i>
							</Button>

							<Button
								variant="primary"
								type="submit"
								className="w-100"
							>
								Submit
							</Button>
						</ButtonGroup>
					</Col>
				</Row>
			</Container>
		</Form>
	);
};
export default CoordinateForm;
