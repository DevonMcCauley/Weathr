import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const googleKey = process.env.REACT_APP_GOOGLE_API_KEY;

// Gets the user's coordinates required for the Weather API
const getGoogle = createAsyncThunk('google', async ({ location }) => {
	const response = await axios.get(
		`https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${googleKey}`
	);
	const loc = response.data.results[0].geometry.location;
	return { latitude: loc.lat, longitude: loc.lng };
});

export { getGoogle };
