import '../styles/app.scss';

// Hamburger
const hamburger = document.querySelector("#js-hamburger");
const mainNavigation = document.querySelector(".navbar__mainmenu")

hamburger.addEventListener("click", () => {
    if(mainNavigation.classList.contains('active')) {
        mainNavigation.classList.remove('active');
    }else{
        mainNavigation.classList.add('active');
    }
});