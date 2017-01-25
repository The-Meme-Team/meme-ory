'use strict';

var formEl = document.getElementById('playerUserName'); // get form element

formEl.addEventListener('submit', usernameElementSubmit);

function usernameElementSubmit(event) {
  event.preventDefault(); // prevent default behavior of event. in this case reset page
  event.stopPropagation();

  var userName = [event.target.playerName.value, 0];
  console.log(userName);
  localStorage.matchData = JSON.stringify(userName);
  console.log(localStorage.matchData);
  window.location.href = 'game.html';
}
