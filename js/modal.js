var link = document.querySelector (".navigation a");
var menu = document.querySelector (".menu");
var close = menu.querySelector(".menu-close");

link.addEventListener("click", function () {
    menu.classList.add("menu-active");
})

close.addEventListener("click", function() {
    menu.classList.remove("menu-active");
})