// navigation.js

export function initializeNavigation() {
    console.log("initializeNavigation called");

    let menuToggle = document.getElementById('menu-toggle');
    let navigation = document.querySelector('.navigation');

    menuToggle.addEventListener('click', function() {
        navigation.classList.toggle('open');
        console.log("Toggle event triggered");
    });
}

console.log(initializeNavigation()); 


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
