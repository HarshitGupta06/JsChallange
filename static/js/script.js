// Challange 1: Your Age in Days

function ageInDays() {
    var birthYear = prompt("What year were you born... Good Friend?");
    var ageInDayss = (2022 - birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + ageInDayss + ' days old.');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
    document.getElementById('ageInDays').remove();

}

// Challange 2: Cat Generator
function generateCat() {
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = "http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);
           
}

//Challange 3: Rock, Paper, Scissors
function rpsGame(yourChoice) {
    console.log(yourChoice);
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    
    botChoice = numberToChoice(randToRpsInt());
    console.log('Computer choice:', botChoice);
    
    //THIS FUNCTION RETURNS [0,1] = BOT WON, [0.5,0.5] = DRAW, OR [1,0] = HUMAN WON
    results = decideWinner(humanChoice, botChoice);  
    console.log(results);
    
    message = finalMesssage(results);  //'{'message': You Won!', 'color': 'green'}
    console.log(message);
    
    rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randToRpsInt() {
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
    return ['rock', 'paper', 'scissors'][number];
}

function decideWinner(yourChoice, computerChoice) {
    var rpsDatabase = {
        'rock': {'scissors': 1,'rock': 0.5, 'paper': 0},
        'paper': {'rock': 1,'paper': 0.5, 'scissors': 0},
        'scissors': {'paper': 1,'scissors': 0.5, 'rock': 0}
    }

    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];

    return [yourScore, computerScore];
}

function finalMesssage([yourScore, computerScore]) {
    if(yourScore === 0) {
        return {'message': 'You lost!', 'color': 'red'};
    } else if(yourScore === 0.5) {
        return {'message': 'You tied!', 'color': 'yellow'};
    } else {
        return {'message': 'You won!', 'color': 'green'};
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMesssage) {
    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }

    //Remove all the images
    document.getElementById('rock').remove;
    document.getElementById('paper').remove;
    document.getElementById('scissors').remove;
}

var humanDiv = document.createElement('div');
var botDiv = document.createElement('div');
var messageDiv = document.createElement('div');