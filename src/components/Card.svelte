<script>
	export let name;
	export let sex;
	export let image;
</script>

<div class="card" style="background-image: url('{`/${image}`}');">
	<!-- We can optionally add text or overlays here if needed -->
</div>

<style lang="scss">
	.card {
		min-width: 15vh;
		height: 100%;
		aspect-ratio: 2.5 / 3.5;
		box-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
		border-radius: 8px;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
	}
</style>
