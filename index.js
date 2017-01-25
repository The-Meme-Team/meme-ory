'use strict';

var formEl = document.getElementById('playerUsername'); // get form element

formEl.addEventListener('submit', usernameElementSubmit);

function usernameElementSubmit(event) {
  event.preventDefault(); // prevent default behavior of event. in this case reset page
  event.stopPropagation();

  var userName = [event.target.playerName.value, 0];
  console.log(userName);
  localStorage.data = JSON.stringify(userName);
  console.log(localStorage.data);
  window.location.href = 'game.html';
}
