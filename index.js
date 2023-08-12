var timer = 60;
var score = 0;
var randomNumber;

function increaseScore() {
    score += 10;
    document.querySelector('#score').textContent = score;
}

function makeHit() {
    randomNumber = Math.floor(Math.random() *10);
    document.querySelector('#hit').textContent = randomNumber;
}

function makeBubble() {
  var clutter = "";

  for (var i = 0; i <= 132; i++) {
    var randomNumber = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${randomNumber}</div>`;
  }

  document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer(){
    var timeStop =  setInterval(function(){
        if(timer >= 0){
            document.querySelector("#time").textContent = timer;
            timer--;
        }
        else{
            clearInterval(timeStop);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
        }
    },1000)
}

document.querySelector("#pbtm").addEventListener("click",function(e){
    var create = Number(e.target.textContent);
    if(create === randomNumber){
        makeBubble();
        makeHit();
        increaseScore();
    }
})


makeHit();
runTimer();
makeBubble();
