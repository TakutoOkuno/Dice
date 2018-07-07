document.getElementById('btn1').onclick = function(){
dice = Math.floor(Math.random()*100)+1;
document.querySelector('#test1').innerHTML = dice;
};