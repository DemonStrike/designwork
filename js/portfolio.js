
var btn_prev = document.querySelector ('#gallery .buttons .prev');
var btn_next = document.querySelector ('#gallery .buttons .next');

var images = document.querySelectorAll ('#gallery .portfolio img');
var i = 0;




btn_next.onclick = function () {
    
    images[i].className = 'portfolio_none'; //0
    i++; //1
    images[i].className = 'portfolio_left'; //1
    i++; //2
    images[i].className = 'portfolio_wiev'; //2
    i++; //3
    
    if (i >= images.length) {
       i = 0;   
    images[i].className = 'portfolio_right';
  
    }
    
else {
  images[i].className = 'portfolio_right'; //3
    
    i = i-2;
}
    console.log(i); // выводит “Captain’s Log” в панель консоли
    } 



btn_prev.onclick = function () {
  images[i].className = 'portfolio_none';
    i++; //1
    images[i].className = 'portfolio_left';
    i++; //2
    images[i].className = 'portfolio_wiev';
    i++; //3
    images[i].className = 'portfolio_right';
  // if (i >= images.length) {
    //    i = 0; }
    i = i-2;
    }











/*var btn_prev = document.querySelector ('#gallery .buttons .prev');
var btn_next = document.querySelector ('#gallery .buttons .next');

var images = document.querySelectorAll ('#gallery .portfolio img');
var a = 0;
var b = 1;
var c = 2;
var d = 3;


btn_next.onclick = function () {
    if (a >= images.length) {
       a = 0; };
    images[a].className = 'portfolio_none'; //0
    a++; //1
    if (b >= images.length) {
       b = 0; };
    images[b].className = 'portfolio_left'; //1
    b++; //2
    if (c >= images.length) {
       c = 0; };
    images[c].className = 'portfolio_wiev'; //2
    c++; //3
     if (d >= images.length) {
       d = 0; };
    images[d].className = 'portfolio_right'; //3
    d++; //4 
}




btn_prev.onclick = function () {
    if (a < 0) {
       a = images.length -1; };
    images[a].className = 'portfolio_wiev'; //0
    a--; //1
    if (b < 0) {
       b = images.length -1; };
    images[b].className = 'portfolio_right'; //1
    b--; //2
    if (c < 0) {
       c = images.length -1; };
    images[c].className = 'portfolio_none'; //2
    c--; //3
     if (d < 0) {
       d = images.length -1; };
    images[d].className = 'portfolio_left'; //3
    d--; //4 
}
*/
