import { writable } from 'svelte/store';

export const player1Hand = writable([]);
export const player2Hand = writable([]);
export const player3Hand = writable([]);
export const player4Hand = writable([]);
export const player5Hand = writable([]);
export const player6Hand = writable([]);

export const deck = [
    // Pair 1: Goth
    { name: "Goth", sex: "f", image: "images/goth-f.jpg" },
    { name: "Goth", sex: "m", image: "images/goth-m.jpg" },

    // Pair 2: Punk
    { name: "Punk", sex: "f", image: "images/punker-f.jpg" },
    { name: "Punk", sex: "m", image: "images/punker-m.jpg" },

    // Pair 3: Hippie
    { name: "Hippie", sex: "f", image: "images/hippie-f.jpg" },
    { name: "Hippie", sex: "m", image: "images/hippie-m.jpg" },

    // Pair 4: Geek
    { name: "Geek", sex: "f", image: "images/geek-f.jpg" },
    { name: "Geek", sex: "m", image: "images/geek-m.jpg" },

    // Pair 5: Skater
    { name: "Skater", sex: "f", image: "images/skater-f.jpg" },
    { name: "Skater", sex: "m", image: "images/skater-m.jpg" },

    // Pair 6: Metalhead
    { name: "Metalhead", sex: "f", image: "images/metalhead-f.jpg" },
    { name: "Metalhead", sex: "m", image: "images/metalhead-m.jpg" },

    // Pair 7: Raver
    { name: "Raver", sex: "f", image: "images/raver-f.jpg" },
    { name: "Raver", sex: "m", image: "images/raver-m.jpg" },

    // Pair 8: Emo
    { name: "Emo", sex: "f", image: "images/emo-f.jpg" },
    { name: "Emo", sex: "m", image: "images/emo-m.jpg" },

    // Pair 9: Hip-Hop
    { name: "Hip-Hop", sex: "f", image: "images/hip-hop-f.jpg" },
    { name: "Hip-Hop", sex: "m", image: "images/hip-hop-m.jpg" },

    // Pair 10: Cyberpunk
    { name: "Cyberpunk", sex: "f", image: "images/cyberpunk-f.jpg" },
    { name: "Cyberpunk", sex: "m", image: "images/cyberpunk-m.jpg" },

    // Pair 11: Steampunk
    { name: "Steampunk", sex: "f", image: "images/steampunk-f.jpg" },
    { name: "Steampunk", sex: "m", image: "images/steampunk-m.jpg" },

    // Pair 12: Rockabilly
    { name: "Rockabilly", sex: "f", image: "images/rockabilly-f.jpg" },
    { name: "Rockabilly", sex: "m", image: "images/rockabilly-m.jpg" },

    // Pair 13: Hipster
    { name: "Hipster", sex: "f", image: "images/hipster-f.jpg" },
    { name: "Hipster", sex: "m", image: "images/hipster-m.jpg" },

    // Pair 14: Minimalist
    { name: "Minimalist", sex: "f", image: "images/minimalist-f.jpg" },
    { name: "Minimalist", sex: "m", image: "images/minimalist-m.jpg" },

    // Pair 15: Beach Bum
    { name: "Beach Bum", sex: "f", image: "images/beach-bum-f.jpg" },
    { name: "Beach Bum", sex: "m", image: "images/beach-bum-m.jpg" },

    // Pair 16: GorpCore
    { name: "GorpCore", sex: "f", image: "images/gorpcore-f.jpg" },
    { name: "GorpCore", sex: "m", image: "images/gorpcore-m.jpg" },

    // Black Peter card
    { name: "Black Peter", sex: "m", image: "images/black-peter.jpg" }
];
