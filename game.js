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

  var img = ["https://cdn.glitch.global/ed2aef2e-2164-4fa9-a494-61067e6d3472/dice1.png?1669991703606","https://cdn.glitch.global/ed2aef2e-2164-4fa9-a494-61067e6d3472/dice2.png?1669991704386","https://cdn.glitch.global/ed2aef2e-2164-4fa9-a494-61067e6d3472/dice3.png?1669991704933","https://cdn.glitch.global/ed2aef2e-2164-4fa9-a494-61067e6d3472/dice4.png?1669991705715","https://cdn.glitch.global/ed2aef2e-2164-4fa9-a494-61067e6d3472/dice5.png?1669991706275","https://cdn.glitch.global/ed2aef2e-2164-4fa9-a494-61067e6d3472/dice6.png?1669991706825"];

  document.querySelector("img.img1").setAttribute("src",img[randomNumber1-1]);
  document.querySelector("img.img2").setAttribute("src",img[randomNumber2-1]);
  
  if (player1 == "NITHIN" || player2 == "NITHIN"){
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