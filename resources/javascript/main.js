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
document.querySelector("#dropdown").onclick = function () {
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none"
    } else {
        dropdownContent.style.display = "block"
    }
};

window.onload = function () {
    var divToHide = document.querySelector('#dropdown-content');
    document.onclick = function (e) {
        if (e.target.id !== 'dropdown-content' && e.target.id !== 'dropdown-menu') {
            divToHide.style.display = 'none';
        }
    };
};

const overlay = document.getElementById('overlay');

function showMyImage(caller) {
    var path = '<img src="/resources/photos/gallery/' + caller.id + '.jpeg">';
    overlay.innerHTML = path;
    overlay.style.display = 'block';
}

function hideMyImage() {
    overlay.style.display = 'none';
}

