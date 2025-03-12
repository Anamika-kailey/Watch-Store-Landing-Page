document.querySelector(".search-icon").addEventListener("click", function() {
    document.querySelector(".search-bar").classList.toggle("active");
});

document.querySelector(".menu-icon-dynamic").addEventListener("click", function() {
    document.querySelector(".menu").classList.toggle("active");
});

const menuIcon = document.querySelector(".menu-icon-dynamic");
const menu = document.querySelector(".menu");
document.addEventListener("click", function (event) {
    if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
        menu.classList.remove("active");
    }
})