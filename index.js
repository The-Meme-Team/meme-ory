'use strict';

var formEl = document.getElementById('playerUserName'); // get form element

formEl.addEventListener('submit', usernameElementSubmit, false);

function usernameElementSubmit(event) {
  event.preventDefault(); // prevent default behavior of event. in this case reset page
  event.stopPropagation();

  var userName = event.target.playerName.value;
  console.log(userName);
  localStorage.setItem('userName', JSON.stringify(userName));
  //console.log(localStorage.matchData);
  window.location.href = 'game.html';
}
