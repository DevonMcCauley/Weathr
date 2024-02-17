<script lang="ts">
	import axios from 'axios';
	import ForecastCard from '../components/ForecastCard.svelte';

	let latitude: string = '';
	let longitude: string = '';
	let forecast: any[] = [];

	const getPoints = async () => {
		const response = await axios({
			method: 'GET',
			url: `https://api.weather.gov/points/${latitude},${longitude}`
		});

		// Get the GridId, GridX, and GridY from the response
		const { properties } = response.data;
		const { gridId, gridX, gridY } = properties;

		// Use the GridId, GridX, and GridY to get the forecast
		const forecastResponse = await axios({
			method: 'GET',
			url: `https://api.weather.gov/gridpoints/${gridId}/${gridX},${gridY}/forecast`
		});

		// Get the forecast from the response
		const { properties: forecastProperties } = forecastResponse.data;
		const { periods } = forecastProperties;

		console.log(periods);
		forecast = periods;
	};

	const handleSubmit = async () => {
		await getPoints();
	};
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center flex flex-col items-center">
		<h2 class="h2">Welcome to Weathr.</h2>

		<form on:submit={handleSubmit}>
			<input type="text" class="input" placeholder="Latitude" bind:value={latitude} />
			<input type="text" class="input my-3" placeholder="Longitude" bind:value={longitude} />
			<button type="submit" class="btn variant-filled">Get Weather</button>
		</form>

		<div>
			{#if forecast.length > 0}
				<div class="grid grid-cols-auto gap-4 md:grid-cols-2 lg:grid-cols-3">
					{#each forecast as period}
						<ForecastCard {period} />
					{/each}
				</div>
			{:else}
				<p>No forecast available.</p>
			{/if}
		</div>
	</div>
</div>
