// Navbar opacity based on scroll position

window.addEventListener("scroll", () => {
    const navBar = document.querySelector(".nav-bar");
    scroll = this.scrollY;
    if (scroll > 0) {
        navBar.style.backgroundColor = "black"
    } else {
        navBar.style.backgroundColor = "rgba(0,0,0,0.5)"
        navBar.style.transitionDuration = "0.5s"
    }
})

const dropdownContent = document.querySelector(".dropdown-content")
const dropdownLi = document.querySelector(".dropdown-li")
document.querySelector(".dropdown").addEventListener("click", () => {
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none"
    } else {
        dropdownContent.style.display = "block"
    }
})