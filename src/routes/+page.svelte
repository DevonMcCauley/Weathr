<script lang="ts">
	import { getWeatherForecast } from '../services/weatherService';
	import ForecastCard from '../components/ForecastCard.svelte';

	let latitude: string = '';
	let longitude: string = '';
	let forecast: any[] = [];
	let city = '';
	let state = '';

	const handleSubmit = async () => {
		let resForecast = await getWeatherForecast(latitude, longitude);
		forecast = resForecast.periods;
		city = resForecast.city;
		state = resForecast.state;
	};
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center flex flex-col items-center mx-2">
		<h2 class="h2 mt-2">Welcome to Weathr.</h2>

		<form on:submit={handleSubmit}>
			<input type="text" class="input" placeholder="Latitude" bind:value={latitude} />
			<input type="text" class="input my-3" placeholder="Longitude" bind:value={longitude} />
			<button type="submit" class="btn variant-filled">Get Weather</button>
		</form>

		<!-- Apply TailwindCSS overflow classes here -->
		{#if forecast.length > 0}
			<h3 class="h3">Forecast for {city}, {state}</h3>

			<div class="grid grid-cols-1 gap-4 p-5 md:grid-cols-2 lg:grid-cols-3">
				{#each forecast as period}
					<ForecastCard {period} />
				{/each}
			</div>
		{:else}
			<p>No forecast available.</p>
		{/if}
	</div>
</div>
