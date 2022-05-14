// Navbar opacity based on scroll position
window.addEventListener("scroll", () => {
    const navBar = document.querySelector(".nav-bar");
    scroll = this.scrollY;
    try {
        if (scroll > 0) {
            navBar.style.backgroundColor = "black"
        } else {
            navBar.style.backgroundColor = "rgba(0,0,0,0.5)"
            navBar.style.transitionDuration = "0.5s"
        }
    } catch {
    }
})

if (document.location.href == 'http://crisgymfitness.ro/galerie') {
    const gallery = document.getElementById('gallery');
    if (screen.width < 1023) {
        console.log(screen.width);
        gallery.innerHTML = '<div class="grid-item"><img class="gallery-image" id="2" onclick="showMyImage(this)" src="/resources/photos/gallery/2.jpeg" style="height: 285px; width: 250px;" alt="2" /></div><div class="grid-item"><img class="gallery-image" id="1" onclick="showMyImage(this)" src="/resources/photos/gallery/1.jpeg" style="height: 285px; width: 250px;" alt="1" /></div><div class="grid-item"><img class="gallery-image" id="3" onclick="showMyImage(this)" src="/resources/photos/gallery/3.jpeg" style="height: 285px; width: 250px;" alt="3" /></div><div class="grid-item"><img class="gallery-image" id="4" onclick="showMyImage(this)" src="/resources/photos/gallery/4.jpeg" style="height: 285px; width: 250px;" alt="4" /></div><div class="grid-item"><img class="gallery-image" id="9" onclick="showMyImage(this)" src="/resources/photos/gallery/9.jpeg" style="height: 285px; width: 250px;" alt="9" /></div><div class="grid-item"><img class="gallery-image" id="5" onclick="showMyImage(this)" src="/resources/photos/gallery/5.jpeg" style="height: 285px; width: 250px;" alt="5" /></div><div class="grid-item"><img class="gallery-image" id="6" onclick="showMyImage(this)" src="/resources/photos/gallery/6.jpeg" style="height: 285px; width: 250px;" alt="6" /></div><div class="grid-item"><img class="gallery-image" id="7" onclick="showMyImage(this)" src="/resources/photos/gallery/7.jpeg" style="height: 285px; width: 250px;" alt="7" /></div><div class="grid-item"><img class="gallery-image" id="8" onclick="showMyImage(this)" src="/resources/photos/gallery/8.jpeg" style="height: 285px; width: 250px;" alt="8" /></div><div class="grid-item"><img class="gallery-image" id="10" onclick="showMyImage(this)" src="/resources/photos/gallery/10.jpeg" style="height: 285px; width: 250px;" alt="10" /></div><div class="grid-item"><img class="gallery-image" id="11" onclick="showMyImage(this)" src="/resources/photos/gallery/11.jpeg" style="height: 285px; width: 250px;" alt="11" /></div><div class="grid-item"><img class="gallery-image" id="12" onclick="showMyImage(this)" src="/resources/photos/gallery/12.jpeg" style="height: 285px; width: 250px;" alt="12" /></div><div class="grid-item"><img class="gallery-image" id="13" onclick="showMyImage(this)" src="/resources/photos/gallery/13.jpeg" style="height: 285px; width: 250px;" alt="13" /></div><div class="grid-item"><img class="gallery-image" id="14" onclick="showMyImage(this)" src="/resources/photos/gallery/14.jpeg" style="height: 285px; width: 250px;" alt="14" /></div><div class="grid-item"><img class="gallery-image" id="15" onclick="showMyImage(this)" src="/resources/photos/gallery/15.jpeg" style="height: 285px; width: 250px;" alt="15" /></div><div class="grid-item"><img class="gallery-image" id="16" onclick="showMyImage(this)" src="/resources/photos/gallery/16.jpeg" style="height: 285px; width: 250px;" alt="16" /></div><div class="grid-item"><img class="gallery-image" id="17" onclick="showMyImage(this)" src="/resources/photos/gallery/17.jpeg" style="height: 285px; width: 250px;" alt="17" /></div><div class="grid-item"><img class="gallery-image" id="18" onclick="showMyImage(this)" src="/resources/photos/gallery/18.jpeg" style="height: 285px; width: 250px;" alt="18" /></div><div class="grid-item"><img class="gallery-image" id="19" onclick="showMyImage(this)" src="/resources/photos/gallery/19.jpeg" style="height: 285px; width: 250px;" alt="19" /></div><div class="grid-item"><img class="gallery-image" id="20" onclick="showMyImage(this)" src="/resources/photos/gallery/20.jpeg" style="height: 285px; width: 250px;" alt="20" /></div><div class="grid-item"><img class="gallery-image" id="21" onclick="showMyImage(this)" src="/resources/photos/gallery/21.jpeg" style="height: 285px; width: 250px;" alt="21" />';
    } else {
        console.log(screen.width + 'ceva');
        gallery.innerHTML = ' <div class="grid-item"> <a href="/resources/photos/gallery/2.jpeg"><img class="gallery-image" id="2" src=" /resources/photos/gallery/2.jpeg" style="height: 285px; width: 250px;" alt="2"></a> </div><div class="grid-item"> <a href="/resources/photos/gallery/1.jpeg"><img class="gallery-image" id="1" src=" /resources/photos/gallery/1.jpeg" style="height: 285px; width: 250px;" alt="1"></a> </div><div class="grid-item"> <a href="/resources/photos/gallery/3.jpeg"><img class="gallery-image" id="3" src=" /resources/photos/gallery/3.jpeg" style="height: 285px; width: 250px;" alt="3"></a> </div><div class="grid-item"> <a href="/resources/photos/gallery/4.jpeg"><img class="gallery-image" id="4" src=" /resources/photos/gallery/4.jpeg" style="height: 285px; width: 250px;" alt="4"></a> </div><div class="grid-item"> <a href="/resources/photos/gallery/5.jpeg"><img class="gallery-image" id="5" src=" /resources/photos/gallery/5.jpeg" style="height: 285px; width: 250px;" alt="5"></a> </div><div class="grid-item"> <a href="/resources/photos/gallery/6.jpeg"><img class="gallery-image" id="6" src=" /resources/photos/gallery/6.jpeg" style="height: 285px; width: 250px;" alt="6"></a> </div><div class="grid-item"> <a href="/resources/photos/gallery/7.jpeg"><img class="gallery-image" id="7" src=" /resources/photos/gallery/7.jpeg" style="height: 285px; width: 250px;" alt="7"></a> </div><div class="grid-item"> <a href="/resources/photos/gallery/8.jpeg"><img class="gallery-image" id="8" src=" /resources/photos/gallery/8.jpeg" style="height: 285px; width: 250px;" alt="8"></a> </div><div class="grid-item"> <a href="/resources/photos/gallery/9.jpeg"><img class="gallery-image" id="9" src=" /resources/photos/gallery/9.jpeg" style="height: 285px; width: 250px;" alt="9"></a> </div><div class="grid-item"> <a href="/resources/photos/gallery/10.jpeg"><img class="gallery-image" id="10" src=" /resources/photos/gallery/10.jpeg" style="height: 285px; width: 250px;" alt="10"></a> </div><div class="grid-item"> <a href="/resources/photos/gallery/11.jpeg"><img class="gallery-image" id="11" src=" /resources/photos/gallery/11.jpeg" style="height: 285px; width: 250px;" alt="11"></a> </div><div class="grid-item"> <a href="/resources/photos/gallery/12.jpeg"><img class="gallery-image" id="12" src=" /resources/photos/gallery/12.jpeg" style="height: 285px; width: 250px;" alt="12"></a> </div><div class="grid-item"> <a href="/resources/photos/gallery/13.jpeg"><img class="gallery-image" id="13" src=" /resources/photos/gallery/13.jpeg" style="height: 285px; width: 250px;" alt="13"></a> </div><div class="grid-item"> <a href="/resources/photos/gallery/14.jpeg"><img class="gallery-image" id="14" src=" /resources/photos/gallery/14.jpeg" style="height: 285px; width: 250px;" alt="14"></a> </div><div class="grid-item"> <a href="/resources/photos/gallery/15.jpeg"><img class="gallery-image" id="15" src=" /resources/photos/gallery/15.jpeg" style="height: 285px; width: 250px;" alt="15"></a> </div><div class="grid-item"> <a href="/resources/photos/gallery/16.jpeg"><img class="gallery-image" id="16" src=" /resources/photos/gallery/16.jpeg" style="height: 285px; width: 250px;" alt="16"></a> </div><div class="grid-item"> <a href="/resources/photos/gallery/17.jpeg"><img class="gallery-image" id="17" src=" /resources/photos/gallery/17.jpeg" style="height: 285px; width: 250px;" alt="17"></a> </div><div class="grid-item"> <a href="/resources/photos/gallery/18.jpeg"><img class="gallery-image" id="18" src=" /resources/photos/gallery/18.jpeg" style="height: 285px; width: 250px;" alt="18"></a> </div><div class="grid-item"> <a href="/resources/photos/gallery/19.jpeg"><img class="gallery-image" id="19" src=" /resources/photos/gallery/19.jpeg" style="height: 285px; width: 250px;" alt="19"></a> </div><div class="grid-item"> <a href="/resources/photos/gallery/20.jpeg"><img class="gallery-image" id="20" src=" /resources/photos/gallery/20.jpeg" style="height: 285px; width: 250px;" alt="20"></a> </div><div class="grid-item"> <a href="/resources/photos/gallery/21.jpeg"><img class="gallery-image" id="21" src=" /resources/photos/gallery/21.jpeg" style="height: 285px; width: 250px;" alt="21"></a> </div>';
    }
}

// dropdown show and hide
const dropdownContent = document.querySelector(".dropdown-content")
const dropdownLi = document.querySelector(".dropdown-li")
document.querySelector("#dropdown").onclick = function () {
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none"
    } else {
        dropdownContent.style.display = "block"
    }
};

// dropdown hide on window click
window.onload = function () {
    var divToHide = document.querySelector('#dropdown-content');
    document.onclick = function (e) {
        if (e.target.id !== 'dropdown-content' && e.target.id !== 'dropdown-menu') {
            divToHide.style.display = 'none';
        }
    };
};

// custom path based on caller id
const overlay = document.getElementById('overlay');
function showMyImage(caller) {
    var path = '<img src="/resources/photos/gallery/' + caller.id + '.jpeg">';
    overlay.innerHTML = path;
    overlay.style.display = 'block';
}

// hide on window click
function hideMyImage() {
    overlay.style.display = 'none';
}

