<script>
	import { deck } from '../store.js';
	import Card from './Card.svelte';

	// Function to shuffle the deck
	function shuffle(array) {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	}

	// Shuffle the deck and divide it into two hands
	const shuffledDeck = shuffle([...deck]);
	const player1Hand = shuffledDeck.slice(0, Math.floor(shuffledDeck.length / 2));
	const player2Hand = shuffledDeck.slice(Math.floor(shuffledDeck.length / 2));

	// Path to the back image in the static/images folder
	const backImage = '/images/back.jpg';
</script>

<div class="game-board">
	<!-- Upper row: Player 1's hand (card backs) -->
	<div class="card-row back-row">
		{#each player1Hand as _, index}
			<img
				src={backImage}
				alt="Card back"
				class="card back-card"
				style="z-index: {index}; margin-left: -35px;"
			/>
		{/each}
	</div>

	<!-- Lower row: Player 2's hand (card fronts) -->
	<div class="card-row front-row">
		{#each player2Hand as card, index}
			<Card
				name={card.name}
				sex={card.sex}
				image={card.image}
				class="card front-card"
				style="z-index: {index}; margin-left: -35px;"
			/>
		{/each}
	</div>
</div>

<style lang="scss">
	.game-board {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 20px;
		padding: 20px;
	}

	.card-row {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		width: fit-content;
	}

	.card {
		width: 100px;
		height: 140px;
		transition:
			transform 0.3s ease,
			z-index 0.3s ease;
		border-radius: 8px;
		box-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
	}

	/* Increase scale and z-index on hover for emphasis */
	.card:hover {
		transform: scale(1.1);
		z-index: 100;
	}

	.back-card {
		background-color: #ccc;
		cursor: pointer;
	}

	.front-card {
		cursor: pointer;
	}
</style>
