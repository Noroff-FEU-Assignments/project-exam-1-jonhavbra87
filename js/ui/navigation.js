// NAVIGATION.js
export function initializeNavigation() {
    const list = document.querySelectorAll('.list');
    const indicator = document.querySelector('.indicator');
    let currentActive = document.querySelector('.list.active');
  
    function updateIndicatorPosition(element, animate = true) {
      const elementRect = element.getBoundingClientRect();
      const navRect = document.querySelector('.navigation ul').getBoundingClientRect();
      const indicatorPosition = elementRect.left - navRect.left + (elementRect.width / 2) - (indicator.offsetWidth / 2);
  
      if (!animate) {
        // Disable transitions for immediate positioning
        indicator.style.transition = 'none';
      }
  
      indicator.style.transform = `translateX(${indicatorPosition}px)`;
  
      if (!animate) {
        // Re-enable transitions after positioning
        requestAnimationFrame(() => {
          indicator.style.transition = 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out'; // Added ease-in-out
        });
      }
    }
  
    function activeLink() {
      list.forEach(item => item.classList.remove('active'));
      this.classList.add('active');
      updateIndicatorPosition(this);
      currentActive = this;
    }
  
    list.forEach(item => item.addEventListener('click', activeLink));
  
    // Initialize the indicator position
    const activeItem = document.querySelector('.list.active');
    if (activeItem) {
      updateIndicatorPosition(activeItem, false); // Initialize without animation
      // Make the indicator visible after positioning it
      indicator.style.opacity = '1';
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const indicator = document.querySelector('.indicator');
    // Hide the indicator initially
    indicator.style.opacity = '0';
    initializeNavigation();
    // Make the indicator visible after initialization
    setTimeout(() => {
      indicator.style.opacity = '1';
    }, 100); // Delay to ensure the initial position is set
  });
  
  

  
/* export function initializeNavigation() {
    const list = document.querySelectorAll('.list');
    
    function activeLink() {
      list.forEach(item => item.classList.remove('active'));
      this.classList.add('active');
    }
  
    list.forEach(item => item.addEventListener('click', activeLink));
  } */
  

/* 
export function initializeNavigation() {
    let menuToggle = document.getElementById('menu-toggle');
    let navigation = document.querySelector('.navigation');
    let barsIcon = menuToggle.querySelector('.fa-bars');
    let xmarkIcon = menuToggle.querySelector('.fa-xmark');

    menuToggle.addEventListener('click', function() {
        toggleNavigation();
    });

    window.addEventListener('click', function(event) {
        if (!navigation.contains(event.target) && !menuToggle.contains(event.target) && navigation.classList.contains('open')) {
            toggleNavigation();
        }
    });

    function toggleNavigation() {
        navigation.classList.toggle('open');
        barsIcon.style.display = barsIcon.style.display === "none" ? "" : "none";
        xmarkIcon.style.display = xmarkIcon.style.display === 'none' ? '' : 'none';
        console.log("Toggle event triggered");
    }
    
}
 */