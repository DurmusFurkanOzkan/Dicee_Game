
var x = parseInt(Math.random() * 6 +1);
document.querySelector(".img1").src="images/dice"+String(x)+".png";
var y = parseInt(Math.random() * 6 +1);
document.querySelector(".img2").src="images/dice"+String(y)+".png";
if(x>y)
{
  document.querySelector('h1').innerText="PLayer 1 Wins!";
}
else if(y>x)
{
  document.querySelector('h1').innerText="PLayer 2 Wins!";
}
else {
  document.querySelector('h1').innerText="Draw!";
}
