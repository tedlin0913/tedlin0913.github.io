var navbar = document.querySelector('#mainNavbar')


// Index (home) page
window.onscroll = function () {

    // Only want a fixed top in the main page, where the navbar become tranparent
    // Other time want a sticky-top so don't have to deal with margins
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled')
    } else {
        navbar.classList.remove('scrolled')
    }
}

// Only use fixed top navbar on Home page
if (window.location.pathname == '/') {
    window.onscroll()

} else {
    // Other page
    navbar.classList.remove('fixed-top')
    navbar.classList.add('sticky-top')
    window.onscroll()

    console.log(window.location.pathname);
}