import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const Form = (props) => {
	return (
		<form onSubmit={props.onSubmit}>
			<TextField
				id="latitudeInput"
				label="Latitude"
				variant="outlined"
				inputRef={props.latitudeRef}
			/>
			<TextField
				id="longitudeInput"
				label="Longitude"
				variant="outlined"
				inputRef={props.longitudeRef}
			/>
			<Button type="submit" variant="contained">
				Submit
			</Button>
		</form>
	);
};
export default Form;
