import '../styles/app.scss';
import Slider from './components/slider';

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

// Initialize slider.
const slider = new Slider({
    speed: 3000,
    auto: true
});