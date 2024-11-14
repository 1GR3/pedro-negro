<script>
	import PlayerSelection from '../components/PlayerSelection.svelte';
	import GameBoard from '../components/GameBoard.svelte';

	let playerCount = 1;
	let gameStarted = false;

	function handleStart(event) {
		playerCount = event.detail.playerCount;
		gameStarted = true;
	}

	console.log('App component is rendering');
</script>

<main>
	{#if !gameStarted}
		<PlayerSelection on:start={handleStart} />
	{:else}
		<GameBoard {playerCount} />
	{/if}
</main>

<style lang="scss">
	main {
		background-image: url('/images/board.jpg');
		background-color: burlywood;
		width: 100% !important;
		height: 100vh;
	}
</style>
