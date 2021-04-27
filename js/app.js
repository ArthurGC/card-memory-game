document.addEventListener('DOMContentLoaded',() =>{

cards = [
    {
        name: 'axe',
        img: 'img/axe.png',
    },
    {
        name: 'peak',
        img: 'img/peak.png'
    },
    {
        name: 'axe',
        img: 'img/axe.png'
    },
    {
        name: 'sword',
        img: 'img/sword.png'
    },
    {
        name: 'peak',
        img: 'img/peak.png'
    },
    {
        name: 'showel',
        img: 'img/showel.png'
    },
    {
        name: 'sword',
        img: 'img/sword.png'
    },
    {
        name: 'showel',
        img: 'img/showel.png'
    }
]

let cardChosen = [];
let cardChosenId = [];
let cardsWon = [];


const grid = document.querySelector('.grid');
const score = document.querySelector('.points');

// Restart


function createGrid() {
    for (let i = 0; i < cards.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', 'img/black.jpeg');
        card.setAttribute('data-id', i)
        card.addEventListener('click',flipCard);
        grid.appendChild(card);
    }
}

cards.sort(() => 0.5 -Math.random());


// Check for match 2 cards
function checkForMatch() {
    let allCards = document.querySelectorAll('img');
    let optionOneId = cardChosenId[0];
    let optionTwoId = cardChosenId[1];
    if (cardChosen[0] == cardChosen[1]) {
        alert('You found a match');
        allCards[optionOneId].setAttribute('src','img/gg.png');
        allCards[optionTwoId].setAttribute('src','img/gg.png');
        cardsWon.push(cardChosen);
    }else{
        allCards[optionOneId].setAttribute('src','img/black.jpeg');
        allCards[optionTwoId].setAttribute('src','img/black.jpeg');
        alert('Sorry, try again');
    }
    cardChosen = [];
    cardChosenId = [];
    score.textContent = cardsWon.length;
    if (cardsWon.length == cards.length/2) {
        score.textContent = 'Congratulations! You found them all';
    }
}

// Flip cards
function flipCard() {
    let cardId = this.getAttribute('data-id');
    cardChosen.push(cards[cardId].name);
    cardChosenId.push(cardId);
    this.setAttribute('src',cards[cardId].img);
    if (cardChosen.length == 2) {
        setTimeout(checkForMatch,500);
    }
}

createGrid();

})

const restartGame = () =>{
    location.reload();
}

const btn = document.querySelector('button');
btn.addEventListener('click',restartGame);

