// Navbar opacity based on scroll position
window.addEventListener("scroll", () => {
    const navBar = document.querySelector(".nav-bar");
    var scroll = this.scrollY;
    if (scroll > 0) {
        navBar.style.backgroundColor = "black"
    } else {
        navBar.style.backgroundColor = "rgba(0,0,0,0.7)"
        navBar.style.transitionDuration = "0.5s"
    }
})