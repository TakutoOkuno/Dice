window.onload = function createSelectBox(){
  for(var i=1;i<=100;i++){
    let op = document.createElement("option");
    op.value = i;
    op.text = i;
document.getElementById("sel").appendChild(op);
  }
};

document.getElementById('btn').onclick = function createResult(){
dice = Math.floor(Math.random()*n)+1;
document.querySelector('#test').innerHTML = dice;
};

document.getElementById('numBtn').onclick = function(){
n = document.getElementById('sel').value;
}