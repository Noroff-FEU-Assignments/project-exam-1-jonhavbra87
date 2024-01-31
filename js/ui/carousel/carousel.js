/* export function initializeCarousel() {
    console.log("homepage working")
    const track = document.querySelector(".carousel__track");
    if (!track) {
        console.error("Carousel track not found");
        return;
    }
    const slides = Array.from(track.children);
    const nextButton = document.querySelector(".carousel__button--right");
    const prevButton = document.querySelector(".carousel__button--left");
    const dotsNav = document.querySelector(".carousel__nav");
    const dots = Array.from(dotsNav.children);
   
    // Set the first slide as the current slide
    if (slides.length > 0) {
        slides[0].classList.add("current-slide");
    }
  
  
    if (dots.length > 0) {
        dots[0].classList.add("current-slide"); // Ensure this class name matches your CSS for active dots
    } 
  
    const slideWidth = slides[0].getBoundingClientRect().width;
    console.log(slideWidth);
  
    // Arrange the slides next to one another
    const setSlidePosition = (slide, index) => {
        slide.style.left = slideWidth * index + 'px';
    };
    slides.forEach(setSlidePosition);
  
    // Moving to the next slide
    const moveToSlide = (track, currentSlide, targetSlide) => {
        const targetIndex = slides.findIndex((slide) => slide === targetSlide);
        const distanceToMove = -slideWidth * targetIndex;
        track.style.transform = `translateX(${distanceToMove}px)`;
    
        currentSlide.classList.remove("current-slide");
        targetSlide.classList.add("current-slide");
    };
    
  
    const updateDots = (currentDot, targetDot) => {
        currentDot.classList.remove("current-slide");
        targetDot.classList.add("current-slide");
    }
  
    const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
        if (targetIndex === 0) {
            prevButton.classList.add("is-hidden"); // Add the "is-hidden" class
            nextButton.classList.remove("is-hidden");
        } else if (targetIndex === slides.length - 1) {
            prevButton.classList.remove("is-hidden");
            nextButton.classList.add("is-hidden"); // Add the "is-hidden" class
        } else {
            prevButton.classList.remove("is-hidden");
            nextButton.classList.remove("is-hidden"); // Remove the "is-hidden" class
        }
    };
    
  
    // Click left, move slides to the left
    prevButton.addEventListener('click', e => {
        const currentSlide = track.querySelector('.current-slide');
        const currentDot = dotsNav.querySelector(".current-slide");
  
        if (currentSlide.previousElementSibling) {
        const prevSlide = currentSlide.previousElementSibling;        
        const prevDot = currentDot.previousElementSibling;
        const prevIndex = slides.findIndex(slide => slide === prevSlide);
        
        moveToSlide(track, currentSlide, prevSlide);
        updateDots(currentDot, prevDot);   
        hideShowArrows(slides, prevButton, nextButton, prevIndex)
        }
    });
  
        // Click right, move slides to the right
    nextButton.addEventListener('click', e => {
        const currentSlide = track.querySelector('.current-slide');
        const currentDot = dotsNav.querySelector(".current-slide");
        
        if (currentSlide.nextElementSibling) {
        const nextSlide = currentSlide.nextElementSibling;
        const nextDot = currentDot.nextElementSibling;
        const nextIndex = slides.findIndex(slide => slide === nextSlide);
  
        moveToSlide(track, currentSlide, nextSlide);
        updateDots(currentDot, nextDot);   
        hideShowArrows(slides, prevButton, nextButton, nextIndex)
        }
    });
  
    dotsNav.addEventListener("click", (e) => {
        // Check if the clicked element is a button with the class "carousel__indicator"
        const targetDot = e.target.closest("button.carousel__indicator");
        
        if (targetDot) {
            const currentSlide = track.querySelector(".current-slide");
            const currentDot = dotsNav.querySelector(".current-slide");
            const targetIndex = dots.findIndex((dot) => dot === targetDot);
            const targetSlide = slides[targetIndex];
    
            moveToSlide(track, currentSlide, targetSlide);
            updateDots(currentDot, targetDot);
            hideShowArrows(slides, prevButton, nextButton, targetIndex);
        }
    });
    
  } */