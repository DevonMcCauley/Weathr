import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

// Buids the input fields for entering coordinates
// Returns Refs to the <App /> component to process
const CoordinateForm = (props) => {
	return (
		<Form onSubmit={props.onSubmit}>
			<Container>
				<Row>
					<Col xs={5}>
						<Form.Control
							type="text"
							placeholder="Enter latitude"
							ref={props.latitudeRef}
						/>
					</Col>
					<Col xs={5}>
						<Form.Control
							type="text"
							placeholder="Enter longitude"
							ref={props.longitudeRef}
						/>
					</Col>
					<Col>
						<Button
							variant="primary"
							type="submit"
							className="w-100"
						>
							Submit
						</Button>
					</Col>
				</Row>
			</Container>
		</Form>
	);
};
export default CoordinateForm;
