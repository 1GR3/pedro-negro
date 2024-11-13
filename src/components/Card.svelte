<script>
	export let name;
	export let sex;
	export let image;
	export let styleProps = ''; // New prop to receive style arguments as a string
</script>

<div class="card" style="background-image: url({`/${image}`}); {styleProps}"></div>

<style lang="scss">
	.card {
		// width: 100%;
		// height: 100%;
		aspect-ratio: 2.5 / 3.5;
		box-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
		border-radius: 8px;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		transition:
			transform 0.3s ease,
			z-index 0.3s ease;
	}

	/* Hover effect */
	// .card:hover {
	// 	transform: scale(1.1);
	// 	z-index: 100;
	// }
</style>
