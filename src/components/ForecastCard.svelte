<script lang="ts">
	export let period: {
		name: string;
		icon: string;
		shortForecast: string;
		temperature: number;
		temperatureUnit: string;
		detailedForecast: string;
	};
</script>

<div class="card variant-soft-surface">
	<header class="card-header text-xl">{period.name}</header>
	<section class="p-4">
		<img src={period.icon} alt={period.shortForecast} class="mx-auto" />
		<p class="mt-2 text-lg">{period.temperature}&deg;{period.temperatureUnit}</p>
		<p>{period.detailedForecast}</p>
	</section>
</div>
