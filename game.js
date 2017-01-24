'use strict';

// Global variables
var memes = [];
var displayMemes = [];
var displayMemes1 = [];
var displayMemes2 = [];
var memeNumber = 8;
var userChoices = []; // records id of clicks
var matches = 0; // records number of matches user has made
var attempts = 0; // records number of attempts user has made
var madeMatch = false;

// Global DOM variable
var gameEl = document.getElementById('game');

function Meme(id, name) {
  this.id = id;
  this.name = name;
  memes.push(this);
}
Meme.prototype.makeCard = function() {
  var imgEl = document.createElement('img');
  var id = this.id;
  var name = this.name;
  //console.log('makeCard: making element for ' + this.id);
  imgEl.setAttribute('src', 'other-images/card-back.jpg');
  imgEl.setAttribute('class', this.id);
  //console.log(imgEl);
  imgEl.addEventListener('click',function() { // adds event listener to all images created by this method
    console.log('i have been clicked: ' + id);
    imgEl.setAttribute('src', 'memes/' + name + '.jpg');
    console.log(imgEl);
    console.log(userChoices);
    userChoices.push(id);
    if (userChoices.length === 2) {
      attempts++;
      console.log(attempts + ' = attempts');
      compareMatches();
    }
    if (madeMatch === false) {
    }
  }, false);
  gameEl.appendChild(imgEl);
};

var meme0 = new Meme(0, 'aliens');
var meme1 = new Meme(1, 'bad-time');
var meme2 = new Meme(2, 'kermit-tea');
var meme3 = new Meme(3, 'memes-everywhere');
var meme4 = new Meme(4, 'pepperidge-farm');
var meme5 = new Meme(5, 'smug-spongebob');
var meme6 = new Meme(6, 'success-kid');
var meme7 = new Meme(7, 'trollface');

// Function that picks a random number
function random() {
  return Math.floor(Math.random() * memeNumber);
};

// Function that populates array
function populateDisplayMemes() {
  var item;
  for (var i = 0; i < memeNumber; i++) {
    do {
      item = random();
    } while (displayMemes1.includes(item));
    displayMemes1.push(item);
  };
  for (var j = 0; j < memeNumber; j++) {
    do {
      item = random();
    } while (displayMemes2.includes(item));
    displayMemes2.push(item);
  };
  for (var k = 0; k < memeNumber; k++) {
    displayMemes.push(displayMemes1[k]);
    displayMemes.push(displayMemes2[k]);
  };
  console.log(displayMemes);
};

// Function to populate DOM with cards
function populateCards() {
  for (var i = 0; i < displayMemes.length; i++) {
    memes[displayMemes[i]].makeCard();
  }
}

function compareMatches() {
// did user make two choices?
  // if (userChoices.length === 2) {
  //   attempts++;
  //   console.log(attempts + ' = attempts');
  console.log('beginning compare function');
  if (userChoices[0] === userChoices[1]) {
    matches++;
    alert('You got a match!');
    console.log(matches + ' + current total matches made');
  } else {
    var misMatch1 = document.getElementsByClassName(userChoices[0]);
    var misMatch2 = document.getElementsByClassName(userChoices[1]);
    console.log('no matches');
    for (var i = 0; i < misMatch1.length; i++) {
      var imgEl = misMatch1[i];
      imgEl.setAttribute('src', 'other-images/card-back.jpg');
    }
    for (var i = 0; i < misMatch2.length; i++) {
      var imgEl = misMatch2[i];
      imgEl.setAttribute('src', 'other-images/card-back.jpg');
    }
    // document.getElementByClass(misMatch2);
  }
  userChoices = [];
  // }
};

populateDisplayMemes();
populateCards();
