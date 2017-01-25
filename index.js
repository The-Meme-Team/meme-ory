'use strict';

var formEl = document.getElementById('playerUsername'); // get form element

formEl.addEventListener('submit', usernameElementSubmit);

function usernameElementSubmit(event) {
  event.preventDefault(); // prevent default behavior of event. in this case reset page
  event.stopPropagation();

  var username = event.target.playerName.value;
  console.log(username);
  localStorage.data = JSON.stringify(username);
  console.log(localStorage.data);
  window.location.href = 'game.html';
}
