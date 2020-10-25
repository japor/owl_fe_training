class Slider {
    constructor({speed, auto}){
        this.slider = document.querySelector(".slider");
        this.sliderItems = this.slider.querySelectorAll(".slide");
        this.speed = speed;
        this.auto = auto;
        this.nextButton = this.slider.querySelector("#js-sliderNext");
        this.prevButton = this.slider.querySelector("#js-sliderPrev");
        this.indicators = this.slider.querySelector(".slider__indicators");
        this.currentSlide = this.slider.querySelector(".slide.active");

        this.renderIndicators();
        this.eventBindings();

        if (this.auto) {
            this.autoSlide();
        }
    }

    autoSlide(){
        setInterval( () => {
            this.nextButton.click();
        }, this.speed);
    }

    renderIndicators(){
        this.indicators.innerHTML = "";
        this.sliderItems.forEach( (item, index) => {
            const button = document.createElement("button");
            button.setAttribute('slide-id', index);
            button.classList.add('btn-slide-indicator', "slide-id-"+index);
            if(index==0){
                button.classList.add('active');
                
            }
            this.slider.querySelector(".slider__indicators").appendChild(button);
        });
    }

    eventBindings(){
        this.nextButton.addEventListener("click", () => {
            this.currentSlide = this.slider.querySelector(".slide.active");
            let nextSlide = this.currentSlide.nextElementSibling;
            
            if(!nextSlide){
                nextSlide = this.sliderItems.item(0);
            }

            this.animate(nextSlide);
        });

        this.prevButton.addEventListener("click", () => {
            this.currentSlide = this.slider.querySelector(".slide.active");
            let prevSlide = this.currentSlide.previousElementSibling;
            
            if(!prevSlide){
                prevSlide = this.sliderItems.item(this.sliderItems.length-1);
            }

            this.animate(prevSlide);
        });

        const indicatorButtons = this.indicators.querySelectorAll('.btn-slide-indicator');
        indicatorButtons.forEach(button => {
            button.addEventListener("click", e => {
                this.currentSlide = this.slider.querySelector(".slide.active");
                const indicatorId = e.target.getAttribute("slide-id");
                const element = this.sliderItems.item(indicatorId);
                this.animate(element);
            });
        });
    }

    animate(element){
        const slideId = element.getAttribute("slide-id");
        let current = this.indicators.querySelector(".active");
        let next = this.indicators.querySelector(".slide-id-"+slideId);

        current.classList.remove("active");
        next.classList.add("active");
        
        this.currentSlide.classList.remove('active');
        element.classList.add('active');
        
    }
}

export default Slider;