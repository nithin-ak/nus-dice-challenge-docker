const b1 = document.getElementById('b1');
const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');

function clearLocalStorageData(){
  localStorage.clear();
}

function start(){
  localStorage.setItem('player1', p1.value.toUpperCase());
  localStorage.setItem('player2', p2.value.toUpperCase());
  window.location.href = "game.html";
}

b1.addEventListener('click', start);
addEventListener("load", clearLocalStorageData);