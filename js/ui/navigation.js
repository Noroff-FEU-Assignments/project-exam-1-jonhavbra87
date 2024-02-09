// navigation.js

export function initializeNavigation() {
    let menuToggle = document.getElementById('menu-toggle');
    let navigation = document.querySelector('.navigation');
    let barsIcon = menuToggle.querySelector('.fa-bars');
    let xmarkIcon = menuToggle.querySelector('.fa-xmark');

    menuToggle.addEventListener('click', function() {
        navigation.classList.toggle('open');

        if (barsIcon.style.display === "none") {
            barsIcon.style.display = "";
        } else {
            barsIcon.style.display = "none";
        }

        if (xmarkIcon.style.display === 'none') {
            xmarkIcon.style.display = '';
        } else {
            xmarkIcon.style.display = 'none';
        }

        console.log("Toggle event triggered");
    });
}
