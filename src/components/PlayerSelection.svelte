<script>
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();
    export let minPlayers = 1;
    export let maxPlayers = 6;
    let playerCount = 1; // Default to 1 player against the computer

    function startGame() {
        dispatch("start", { playerCount });
    }
</script>

<div class="player-selection">
    <h2>Select Number of Players</h2>

    <label for="playerCount">Players (1 vs. Computer up to 6):</label>
    <input
        id="playerCount"
        type="number"
        bind:value={playerCount}
        min={minPlayers}
        max={maxPlayers}
    />

    <button on:click={startGame}>Start Game</button>
</div>

<style lang="scss">
    .player-selection {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
        padding: 20px;
        border: 1px solid #333;
        border-radius: 8px;
        max-width: 300px;
        margin: auto;
    }

    input {
        width: 60px;
        text-align: center;
    }

    button {
        padding: 10px 20px;
        font-size: 1rem;
        cursor: pointer;
    }
</style>
