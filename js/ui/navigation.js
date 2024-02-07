// navigation.js

export function initializeNavigation() {
    let menuToggle = document.getElementById('menu-toggle');
    let navigation = document.querySelector('.navigation');
    let barsIcon = menuToggle.querySelector('.fa-bars');
    let xmarkIcon = menuToggle.querySelector('.fa-xmark');

    menuToggle.addEventListener('click', function() {
        navigation.classList.toggle('open');
        barsIcon.style.display = barsIcon.style.display === 'none' ? '' : 'none';
        xmarkIcon.style.display = xmarkIcon.style.display === 'none' ? '' : 'none';
        console.log("Toggle event triggered");
    });
}



// export function initializeNavigation() {
//     let menuToggle = document.getElementById('menu-toggle');
//     let navigation = document.querySelector('.navigation');

//     menuToggle.addEventListener('click', function() {
//         navigation.classList.toggle('open');
//         console.log("Toggle event triggered");
//     });
// }


// document.addEventListener('DOMContentLoaded', function() {
//     const menu = document.getElementById('main-nav').querySelector('ul');
//     const menuButton = document.getElementById('menu-button'); // You need to add this button in HTML

//     menuButton.addEventListener('click', function() {
//         if (menu.classList.contains('hidden')) {
//             menu.classList.remove('hidden');
//             menu.classList.add('visible');
//         } else {
//             menu.classList.remove('visible');
//             menu.classList.add('hidden');
//         }
//     });
// });
