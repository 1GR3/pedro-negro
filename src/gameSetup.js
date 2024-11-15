// gameSetup.js
import { deck, player1Hand, player2Hand, player3Hand, player4Hand, player5Hand, player6Hand, currentPlayer } from './store.js';

// Shuffle function (if you haven't defined it already)
function shuffleDeck(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Initialize game
export function initializeGame() {
    const shuffledDeck = shuffleDeck([...deck]);

    const hands = [player1Hand, player2Hand, player3Hand, player4Hand, player5Hand, player6Hand];
    let playerIndex = 0;
    while (shuffledDeck.length > 0) {
        const card = shuffledDeck.pop();
        hands[playerIndex].update(hand => [...hand, card]);
        playerIndex = (playerIndex + 1) % hands.length;
    }

    hands.forEach(hand => hand.update(removePairs));
}

// Function to handle drawing a card from the next player’s hand
export function drawCardFromNextPlayer() {
    const players = [player1Hand, player2Hand, player3Hand, player4Hand, player5Hand, player6Hand];
    const current = currentPlayer.get();
    const next = (current + 1) % players.length;

    let drawnCard;
    players[next].update(hand => {
        drawnCard = hand.splice(Math.floor(Math.random() * hand.length), 1)[0];
        return hand;
    });

    players[current].update(hand => removePairs([...hand, drawnCard]));
    currentPlayer.set(next);
}

// Utility function to remove pairs
function removePairs(hand) {
    const noPairs = [];
    const seen = {};
    hand.forEach(card => {
        const key = card.name + card.sex;
        if (seen[key]) {
            seen[key] = false;
        } else {
            noPairs.push(card);
            seen[key] = true;
        }
    });
    return noPairs;
}
