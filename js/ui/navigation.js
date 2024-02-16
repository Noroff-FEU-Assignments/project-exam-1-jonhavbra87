// NAVIGATION.js

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
