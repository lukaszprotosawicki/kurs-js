const gameSummary = {
    numbers: 0,
    wins: 0,
    losses: 0,
    draws: 0
}

const game = {
    playerHand: null,
    aiHand: null,
    playerHandHTML: null,
}

const hands = document.querySelectorAll('.select img');

function handSelection() {

    game.playerHand = this.dataset.option
    console.log(game.playerHand)
}

hands.forEach(hand => hand.addEventListener('click', handSelection))

