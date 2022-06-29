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
					<Col sm={12} md={6} lg={5}>
						<Form.Control
							type="text"
							placeholder="Enter latitude"
							ref={props.latitudeRef}
						/>
					</Col>
					<Col sm={12} md={6} lg={5} className="my-2 my-md-0">
						<Form.Control
							type="text"
							placeholder="Enter longitude"
							ref={props.longitudeRef}
						/>
					</Col>
					<Col sm={12} lg={2} className="mt-md-2 mt-lg-0">
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
