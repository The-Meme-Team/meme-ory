'use strict';

// Global variables
var displayMemes = [];
var displayMemes1 = [];
var displayMemes2 = [];
var memeNumber = 8;

function Meme(id, name) {
  this.id = id;
  this.name = name;
}
Meme.prototype.makeCard = function() {
  // boilerplate
};

var meme0 = new Meme(0, meme0);
var meme1 = new Meme(1, meme1);
var meme2 = new Meme(2, meme2);
var meme3 = new Meme(3, meme3);
var meme4 = new Meme(4, meme4);
var meme5 = new Meme(5, meme5);
var meme6 = new Meme(6, meme6);
var meme7 = new Meme(7, meme7);

// Function that picks a random number
function random() {
  return Math.floor(Math.random() * memeNumber);
};

// Function that populates array
function populateDisplay() {
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
populateDisplay();