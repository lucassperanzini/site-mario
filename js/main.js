
document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById("menu");
    const nav = document.querySelector(".navegacao");
    const star = document.querySelector('#star')

    menuIcon.addEventListener("click", function() {
        if (nav.classList.contains("show-mobile-nav")) {
            nav.classList.remove("show-mobile-nav");
        } else {
            nav.classList.add("show-mobile-nav");
           
           
            
        }
    });
});