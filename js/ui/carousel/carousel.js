export function initializeCarousel() {
    // Slider
const slider = function () {
    const slides = document.querySelectorAll('.slide');
    const btnLeft = document.querySelector('.slider__btn--left');
    const btnRight = document.querySelector('.slider__btn--right');
    const dotContainer = document.querySelector('.dots');
  
    let curSlide = 0;
    const maxSlide = slides.length;
  
    // Functions
    const createDots = function () {
      slides.forEach(function (_, i) {
        dotContainer.insertAdjacentHTML(
          'beforeend',
          `<button class="dots__dot" data-slide="${i}"></button>`
        );
      });
    };
  
    const activateDot = function (slide) {
      document
        .querySelectorAll('.dots__dot')
        .forEach(dot => dot.classList.remove('dots__dot--active'));
  
      document
        .querySelector(`.dots__dot[data-slide="${slide}"]`)
        .classList.add('dots__dot--active');
    };
  
    const goToSlide = function (slide) {
      slides.forEach(
        (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
      );
    };
  
    // Next slide
    const nextSlide = function () {
      if (curSlide === maxSlide - 1) {
        curSlide = 0;
      } else {
        curSlide++;
      }
  
      goToSlide(curSlide);
      activateDot(curSlide);
      console.log("prev slide is clicked", curSlide);
    };
  //Previous slide
    const prevSlide = function () {
      if (curSlide === 0) {
        curSlide = maxSlide - 1;
      } else {
        curSlide--;
      }
      goToSlide(curSlide);
      activateDot(curSlide);
    };
  
    const init = function () {
      goToSlide(0);
      createDots();
      activateDot(0);

      // Event handlers
      btnRight.addEventListener('click', nextSlide);
      btnLeft.addEventListener('click', prevSlide);
      

      document.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowLeft') prevSlide();
        if (e.key === 'ArrowRight') nextSlide();
      });

      dotContainer.addEventListener('click', function (e) {
        if (e.target.classList.contains('dots__dot')) {
          const { slide } = e.target.dataset;
          goToSlide(slide);
          activateDot(slide);
          
        }
      });
    };

 
    init();
    }
slider();
};





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