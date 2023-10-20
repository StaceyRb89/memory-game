const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple'];
let gameArray = [];
let flippedCards = [];
let matchedPairs = 0;

// game list = color. mixed
// gamelist sort 0.1 not so mixed, 0.9 very mixed
gameArray = colors.concat(colors);
gameArray.sort(() => 0.5 - Math.random());

const gameBoard = document.getElementById('gameBoard');
for (let i = 0; i < gameArray.length; i++) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.color = gameArray[i];
    card.addEventListener('click', handleCardClick);
    gameBoard.appendChild(card);
}

function handleCardClick(event) {
    const clickedCard = event.target;

    // Ignore click if the card is already flipped or matched
    if (clickedCard.classList.contains('flipped') || clickedCard.classList.contains('matched')) {
        return;
    }

    // Show the card
    const cardColor = clickedCard.dataset.color;
    clickedCard.style.backgroundColor = cardColor;
    clickedCard.classList.add('flipped');

    // Add card to flippedCards array
    flippedCards.push(clickedCard);

    // Check for match
    if (flippedCards.length === 2) {
        const [firstCard, secondCard] = flippedCards;
        if (firstCard.dataset.color === secondCard.dataset.color) {
            // Cards match
            firstCard.classList.add('matched');
            secondCard.classList.add('matched');
            matchedPairs++;

            // Reset flippedCards array
            flippedCards = [];

            // Check for game completion
            if (matchedPairs === colors.length) {
                alert('You won!');
            }
        } else {
            // Cards do not match, flip them back after a short delay
            setTimeout(() => {
                firstCard.style.backgroundColor = '';
                secondCard.style.backgroundColor = '';
                firstCard.classList.remove('flipped');
                secondCard.classList.remove('flipped');
                if (clickedCard.classList.contains('flipped') || clickedCard.classList.contains('matched')) {
                    return;
                }
                // Reset flippedCards array
                flippedCards = [];
            }, 1000);
        }
    }
}


const cardColor = clickedCard.dataset.color;
clickedCard.style.backgroundColor = cardColor;
clickedCard.classList.add('flipped');

flippedCards.push(clickedCard);
if (flippedCards.length === 2) {
    // ...
}
firstCard.classList.add('matched');
secondCard.classList.add('matched');
matchedPairs++;
setTimeout(() => {
    // ...
}, 1000);
if (matchedPairs === colors.length) {
    alert('You won!');
}