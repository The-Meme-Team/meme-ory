'use strict';

// Global variables
var memes = [];
var displayMemes = [];
var userChoices = []; // records id of clicks
var matches = 0; // records number of matches user has made
var attempts = 0; // records number of attempts user has made
var userName = localStorage.getItem('userName');
userName = JSON.parse(userName);

// Global DOM variable
var gameEl = document.getElementById('game');
var resultsEl = document.getElementById('results');
var greetEl = document.getElementById('greet');

//constructor
function Meme(id, name) {
  this.id = id;
  this.name = name;
  memes.push(this);
}

// create cards
var meme0 = new Meme(0, 'aliens');
var meme1 = new Meme(1, 'bad-time');
var meme2 = new Meme(2, 'kermit-tea');
var meme3 = new Meme(3, 'memes-everywhere');
var meme4 = new Meme(4, 'pepperidge-farm');
var meme5 = new Meme(5, 'smug-spongebob');
var meme6 = new Meme(6, 'success-kid');
var meme7 = new Meme(7, 'trollface');

// Function that will randomize an array
function shuffleArray(array) {
  for (var j = array.length - 1; j > 0; j--) {
    var k = Math.floor(Math.random() * (j + 1));
    var temp = array[j];
    array[j] = array[k];
    array[k] = temp;
  }
  return array;
}

// Function that populates array
function populateDisplayMemes() {
  for (var i = 0; i < memes.length; i++) {
    displayMemes.push(memes[i]);
    displayMemes.push(memes[i]);
  }
  shuffleArray(displayMemes);
}

//function to make card/ add event listener
function makeCard() {
  greetEl.textContent = 'Hello ' + userName + '!';
  for (var j = 0; j < displayMemes.length; j++) {
    var imgEl = document.createElement('img');
    imgEl.setAttribute('src', 'other-images/card-back.jpg');
    imgEl.setAttribute('class', displayMemes[j].name);
    imgEl.setAttribute('name', displayMemes[j].id);
    imgEl.addEventListener('click', click, false);
    gameEl.appendChild(imgEl);
  }
}

//function to compare matches
function compareMatches() {
// did user make two choices?
  if (userChoices.length === 2) {
    attempts++;
    //console.log(attempts + ' = attempts');
    //console.log('beginning compare function');
    if (userChoices[0] === userChoices[1]) {
      matches++;
      //console.log(matches + ' + current total matches made');
      alert('You made a match!');
      remove();
      endGame();
    } else {
      alert('Sorry, no match. Try again!');
      var misMatch1 = document.getElementsByName(parseInt(userChoices[0]));
      //console.log(misMatch1);
      switchCards(misMatch1);
      var misMatch2 = document.getElementsByName(parseInt(userChoices[1]));
      //console.log(misMatch2);
      switchCards(misMatch2);
      //console.log('no matches');
    }
    userChoices = [];
  }
}

//function to remove event listener
function remove() {
  var removeEl = document.getElementsByName(parseInt(userChoices[0]));
  for (var j = 0; j < removeEl.length; j++){
    var removeItemEl = removeEl[j];
    removeItemEl.removeEventListener('click', click, false);
  }
}

// function to revert cards
function switchCards(htmlArray) {
  //console.log('switch array runs');
  for (var i = 0; i < htmlArray.length; i++) {
    var imgEl = htmlArray[i];
    imgEl.setAttribute('src', 'other-images/card-back.jpg');
  }
}

//event listener function change card/ call compare matches/ push user choice
function click() {
  //console.log(event.target);
  var imgEl = event.target;
  var classEl = imgEl.getAttribute('class');
  var nameEl = imgEl.getAttribute('name');
  //console.log(nameEl);
  imgEl.setAttribute('src', 'memes/' + classEl + '.jpg');
  userChoices.push(nameEl);
  setTimeout(compareMatches, 800);
}

// function to end game and show results
function endGame() {
  if (matches === memes.length) {
    //console.log('end game');
    greetEl.textContent = userName + ', you got it in ' + attempts + ' attempts!';
  }
}

//call functions
populateDisplayMemes();
makeCard();
