/* =====================================================
                    PORTFOLIO JAVASCRIPT
===================================================== */


/* =====================================================
                1. MOBILE NAVIGATION
===================================================== */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");


// Open / close mobile menu
if (menuBtn) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        // Change hamburger icon to X
        const icon = menuBtn.querySelector("i");

        if (navLinks.classList.contains("active")) {

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });

}


// Close mobile menu after clicking a navigation link
document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});



/* =====================================================
                2. COLIGIFY IMAGE GALLERY
===================================================== */


const projectImages = [

    "assets/images/Coligify1.jpeg",

    "assets/images/Coligify2.jpeg",

    "assets/images/Coligify3.jpeg",

    "assets/images/Coligify4.jpeg",

    "assets/images/Coligify5.jpeg",

    "assets/images/Coligify6.jpeg",

    "assets/images/Coligify7.jpeg",

    "assets/images/Coligify8.jpeg"

];


let currentImageIndex = 0;


const mainProjectImage =
    document.getElementById("mainProjectImage");


const imageCounter =
    document.getElementById("imageCounter");



/* =====================================================
                DISPLAY PROJECT IMAGE
===================================================== */

function displayProjectImage() {

    if (!mainProjectImage) {
        return;
    }


    mainProjectImage.src =
        projectImages[currentImageIndex];


    if (imageCounter) {

        imageCounter.textContent =
            `${currentImageIndex + 1} / ${projectImages.length}`;

    }

}



/* =====================================================
                    NEXT IMAGE
===================================================== */

function nextImage() {

    currentImageIndex++;

    if (currentImageIndex >= projectImages.length) {

        currentImageIndex = 0;

    }

    displayProjectImage();

}



/* =====================================================
                PREVIOUS IMAGE
===================================================== */

function previousImage() {

    currentImageIndex--;

    if (currentImageIndex < 0) {

        currentImageIndex =
            projectImages.length - 1;

    }

    displayProjectImage();

}



/* =====================================================
                KEYBOARD CONTROLS
===================================================== */

document.addEventListener("keydown", (event) => {

    // Don't change project image while typing
    if (
        event.target.tagName === "INPUT" ||
        event.target.tagName === "TEXTAREA"
    ) {
        return;
    }


    if (event.key === "ArrowRight") {

        nextImage();

    }


    if (event.key === "ArrowLeft") {

        previousImage();

    }

});



/* =====================================================
                3. CERTIFICATE MODAL
===================================================== */


const certificateModal =
    document.getElementById("certificateModal");


const certificatePreview =
    document.getElementById("certificatePreview");



/* =====================================================
                OPEN CERTIFICATE
===================================================== */

function openCertificate(imagePath) {

    if (!certificateModal || !certificatePreview) {
        return;
    }


    certificatePreview.src = imagePath;


    certificateModal.classList.add("active");


    // Prevent background scrolling
    document.body.style.overflow = "hidden";

}



/* =====================================================
                CLOSE CERTIFICATE
===================================================== */

function closeCertificate() {

    if (!certificateModal) {
        return;
    }


    certificateModal.classList.remove("active");


    certificatePreview.src = "";


    // Enable background scrolling
    document.body.style.overflow = "";

}



/* =====================================================
            CLOSE MODAL BY CLICKING BACKGROUND
===================================================== */

if (certificateModal) {

    certificateModal.addEventListener("click", (event) => {

        if (event.target === certificateModal) {

            closeCertificate();

        }

    });

}



/* =====================================================
                ESCAPE KEY
===================================================== */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        closeCertificate();

    }

});



/* =====================================================
                4. ACTIVE NAVIGATION
===================================================== */


const sections =
    document.querySelectorAll("section[id]");


const navigationLinks =
    document.querySelectorAll(".nav-links a");



window.addEventListener("scroll", () => {

    let currentSection = "";


    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;


        const sectionHeight =
            section.offsetHeight;


        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navigationLinks.forEach(link => {

        link.classList.remove("active");


        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

});



/* =====================================================
                5. SCROLL REVEAL ANIMATION
===================================================== */


const animatedElements =
    document.querySelectorAll(
        ".skill-card, .about-card, .certificate-card, .project-card-large, .education-item, .experience-card"
    );



const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },

        {
            threshold: 0.15
        }

    );



animatedElements.forEach(element => {

    observer.observe(element);

});



/* =====================================================
                6. IMAGE LOADING
===================================================== */


if (mainProjectImage) {

    mainProjectImage.addEventListener(
        "error",
        () => {

            console.error(
                "Unable to load project image:",
                mainProjectImage.src
            );

        }
    );

}



/* =====================================================
                7. PAGE LOADED
===================================================== */


document.addEventListener("DOMContentLoaded", () => {

    // Show first project image
    displayProjectImage();

    console.log(
        "Sahil Sayankar Portfolio loaded successfully."
    );

});