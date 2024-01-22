document.addEventListener('DOMContentLoaded', function() {
    const menu = document.getElementById('main-nav').querySelector('ul');
    const menuButton = document.getElementById('menu-button'); // You need to add this button in HTML

    menuButton.addEventListener('click', function() {
        if (menu.classList.contains('hidden')) {
            menu.classList.remove('hidden');
            menu.classList.add('visible');
        } else {
            menu.classList.remove('visible');
            menu.classList.add('hidden');
        }
    });
});
