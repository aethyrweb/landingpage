document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("menu-toggle").addEventListener("click", function () {
        document.getElementById("sidebar").classList.toggle("active");
    });
});