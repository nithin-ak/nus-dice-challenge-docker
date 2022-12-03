const b1 = document.getElementById('b1');
var player1 = localStorage.getItem('player1');
var player2 = localStorage.getItem('player2');

function catchLocalStorageData() {
    document.getElementById("player1").innerHTML = player1;
    document.getElementById("player2").innerHTML = player2;
};

function throwDice(e){
  e.preventDefault();
  console.log("click");
  var randomNumber1 = Math.floor(Math.random() * 6) + 1; /* Generate random number between 1-6 */
  var randomNumber2 = Math.floor(Math.random() * 6) + 1; /* Generate random number between 1-6 */

  document.querySelector("img.img1").setAttribute("src","images/dice"+randomNumber1+".png");
  document.querySelector("img.img2").setAttribute("src","images/dice"+randomNumber2+".png");
  
  if (player1.toUpperCase() == "NITHIN" || player2.toUpperCase() == "NITHIN"){
  var isNithin = "Y";
  } else {
    isNithin = "N";
  }

  if(randomNumber1===randomNumber2){
  var titletext = "Draw";
  } else if(randomNumber1>randomNumber2){
    titletext = "🚩 "+player1+ " Wins!";
    webHooks(isNithin, player1);
  } else {
    titletext = player2+" Wins 🚩";
    webHooks(isNithin, player2);
  }
  document.querySelector("h1").innerHTML = titletext;
}

function webHooks(w,x){
  x=x.toUpperCase();
  if (w == "Y" && x=="NITHIN"){
    console.log("won");
    fetch("https://maker.ifttt.com/trigger/nithin_won/json/with/key/dA9vImObs05mCsG0HprizF", {
    method: "POST",
    mode: 'no-cors',
    headers: {'Content-Type': 'application/json'}, 
    }).then(res => {
      console.log("Request complete! response:", res);
    });
  } else if (w == "Y" && x!="NITHIN") {
    console.log("lost");
    fetch("https://maker.ifttt.com/trigger/nithin_lost/json/with/key/dA9vImObs05mCsG0HprizF", {
    method: "POST",
    mode: 'no-cors',
    headers: {'Content-Type': 'application/json'}, 
    }).then(res => {
      console.log("Request complete! response:", res);
    });
  }
}

b1.addEventListener('click', throwDice);
addEventListener("load", catchLocalStorageData);