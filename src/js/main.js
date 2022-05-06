const menuBtn = document.querySelector('.hamburger-menu');
const mobileNav = document.querySelector('.mobile-nav');

document.addEventListener("click", e => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]")
    if( !isDropdownButton && e.target.closest('[data-dropdown]') !== null ) {
        return;
    }

    let currentDropdown;

    if(isDropdownButton) {
        currentDropdown = e.target.closest('[data-dropdown]');
        currentDropdown.classList.toggle('active');
    }

    document.querySelectorAll('[data-dropdown].active').forEach(dropdown => {

        if(dropdown === currentDropdown) {
            return;
        }

        dropdown.classList.remove('active');

    });
  })

//   Hamburger Menu 

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    mobileNav.classList.toggle('active');
});