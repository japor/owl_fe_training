import '../styles/app.scss';
import Slider from './components/slider';
import MenuFilter from './components/menuFilter';

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

// Initialize Menu Filter 
new MenuFilter();