function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("show");
    var menuBtn = document.querySelector(".menu-btn");
    menuBtn.classList.toggle("open");
}