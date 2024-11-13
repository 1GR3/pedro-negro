<script>
	import { deck } from '../store.js';
	import Card from './Card.svelte';

	// Shuffle function for randomizing the deck
	function shuffle(array) {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	}

	// Shuffle and split the deck into two hands
	const shuffledDeck = shuffle([...deck]);
	const player1Hand = shuffledDeck.slice(0, Math.floor(shuffledDeck.length / 2));
	const player2Hand = shuffledDeck.slice(Math.floor(shuffledDeck.length / 2));

	// Path for the back image
	const backImage = '/images/back.jpg';
</script>

<div class="game-board">
	<!-- Player 1's hand (card backs) -->
	<div class="card-row back-row">
		{#each player1Hand as _, index}
			<img src={backImage} alt="Card back" class="card back-card" style="--index: {index};" />
		{/each}
	</div>

	<!-- Player 2's hand (card fronts) -->
	<div class="card-row front-row">
		{#each player2Hand as card, index}
			<Card
				name={card.name}
				sex={card.sex}
				image={card.image}
				class="card front-card"
				style="--index: {index};"
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
		position: relative;
		display: flex;
		width: fit-content;
		height: 360px;
	}

	:global(.card) {
		width: 12vw !important;
		height: fit-content;
		aspect-ratio: 5/7;
		border-radius: 8px;
		box-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
		margin-right: -9vw;
		transition:
			transform 0.3s ease,
			z-index 0.3s ease;
		/* Fan effect using CSS only */
		//transform: rotate(calc(var(--index) * 1deg)) translateX(calc(var(--index) * -10px));
		z-index: calc(var(--index) + 1);
		transform: rotate(3deg);
		&:hover {
			transform: scale(1.1) !important;
		}
		&:focus-within ~ &,
		&:hover ~ & {
			transform: translateX(130px) rotate(3deg);
			//margin-right: 1vw;
		}
	}

	/* Hover effect to bring the card forward */
	.card:hover {
		//transform: scale(1.1) !important;
		//z-index: 100;
	}
	.back-row {
		.card {
			transform: rotate(-3deg);
		}
	}
	.back-card {
		background-color: #ccc;
		cursor: pointer;
	}

	.front-card {
		cursor: pointer;
	}
</style>
