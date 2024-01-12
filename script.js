//gaining access to the global score
let player1Score = document.getElementById('player0-score');
let player2Score = document.getElementById('player1-score');
let dice = document.querySelector('.dice-img');
let rollDiceBtn = document.querySelector('#roll');
let current1 = document.getElementById('counter0');
let current2 = document.getElementById('counter1');
let hold = document.querySelector('#hold');
let player1 = document.querySelector('.player0');
let player2 = document.querySelector('.player1');
let newGame = document.querySelector('#newGameBtn');


let scores = [0, 0];
let current = 0;
let activePlayer = 0;
function init() {
    player1Score.textContent = 0;
    player2Score.textContent = 0;

    current1.textContent = 0;
    current2.textContent = 0;

    player1.classList.remove('winner');
    player2.classList.remove('winner');
    player1.classList.add('active-player');
    player2.classList.remove('active-player');
    rollDiceBtn.classList.remove('hidden');
    hold.classList.remove('hidden');
    scores = [0, 0];
    current = 0;
    activePlayer = 0;
    //intially the dice img should be hidden
    dice.classList.add('hidden');   
    document.querySelector('#heading-0').textContent = 'Player 1';
    document.querySelector('#heading-1').textContent = 'Player 2';
}

init();


let switchPlayer = function() {
    current = 0;
        document.getElementById(`counter${activePlayer}`).textContent = current;
        activePlayer = activePlayer === 0? 1 : 0;
    //     if(activePlayer === 0) {
    //         activePlayer = 1;
    //     }
    //     else {
    //         activePlayer = 0;
    //     }

        player1.classList.toggle('active-player');
        player2.classList.toggle('active-player');
}

//make the dice visible when the roll dice button is clicked
rollDiceBtn.addEventListener('click', function() {
    //generate random number
    let diceNumber = Math.trunc(Math.random()*6)+1;

    //display the corresponding dice img
    dice.classList.remove('hidden');
    dice.src = `Images/dice (${diceNumber}).png`
    // console.log(diceNumber);

    //if the random is one then reset the current score and change the active player

    //if not then add it to the current score
    if(diceNumber !== 1) {
    current += diceNumber;
    // console.log(current);

    document.getElementById(`counter${activePlayer}`).textContent = current;
    }

    else {
        switchPlayer();
    }
})

hold.addEventListener('click', function() {
    //add the active player to the global score
    scores[activePlayer] += current;
    document.getElementById(`player${activePlayer}-score`).textContent = scores[activePlayer];

    if(scores[activePlayer] >= 100) {
        //finish the game and announce the winner
        document.querySelector(`.player${activePlayer}`).classList.add('winner');
        document.querySelector(`#heading-${activePlayer}`).textContent = 'WINNER!';
        dice.classList.add('hidden');
        rollDiceBtn.classList.add('hidden');
        hold.classList.add('hidden');
    }

    else {

        switchPlayer();
    }
})

//start a new game
newGame.addEventListener('click', init);