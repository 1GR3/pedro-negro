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

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

{#if !gameStarted}
	<PlayerSelection on:start={handleStart} />
{:else}
	<GameBoard {playerCount} />
{/if}
