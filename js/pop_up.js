
var menu = document.querySelector ('#menu');
var modal = document.querySelector ('#modal');
var close_menu = document.querySelector ('#close_menu');

menu.onclick = function () {
    modal.className = 'modal_show'; 
    } 

close_menu.onclick = function () {
    modal.className = 'modal'; 
    }