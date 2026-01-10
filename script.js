


/* =========================
   HERO SECTIONS FADE-IN
   ========================= */
// HERO-EFFEKTE NUR AUF DER INDEX-SEITE
if (!document.body.classList.contains("gallerie-page")) {

    const heroes = document.querySelectorAll(".hero");

    if (heroes.length > 0) {
        const heroObserver = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("active");
                    } else {
                        entry.target.classList.remove("active");
                    }
                });
            },
            { threshold: 0.8 }
        );

        heroes.forEach(hero => heroObserver.observe(hero));
    }

}



/* =========================
   MENU BUTTON + OVERLAY
   ========================= */
document.addEventListener("DOMContentLoaded", () => {

    const menuBtn = document.getElementById("menu-btn");
    const menuOverlay = document.getElementById("menu-overlay");

    if (menuBtn && menuOverlay) {
        menuBtn.addEventListener("click", () => {
            menuBtn.classList.toggle("open");
            menuOverlay.classList.toggle("active");
        });

        const menuLinks = menuOverlay.querySelectorAll("a");
        menuLinks.forEach(link => {
            link.addEventListener("click", () => {
                menuOverlay.classList.remove("active");
                menuBtn.classList.remove("open");
            });
        });
    }

});



/* =========================
   BANNER – INDEX & BAND
   ========================= */
const banner = document.getElementById("banner");
const bandSection = document.getElementById("band");

const introSection = document.getElementById("intro");

if (banner && bandSection) {

    // 👉 INDEX-SEITE
    if (introSection) {
        const indexObserver = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.target.id === "band" && entry.isIntersecting) {
                        banner.classList.add("visible");
                    }
                    if (entry.target.id === "intro" && entry.isIntersecting) {
                        banner.classList.remove("visible");
                    }
                });
            },
            { threshold: 0.6 }
        );

        indexObserver.observe(bandSection);
        indexObserver.observe(introSection);
    }
}

/* gallerie */

const images = document.querySelectorAll('.drawings img');
const lightbox = document.querySelector('.lightbox');

if (images.length > 0 && lightbox) {
    const lightboxImg = lightbox.querySelector('img');

    images.forEach(img => {
        img.addEventListener('click', () => {
            lightboxImg.src = img.src;
            lightbox.classList.add('active');
        });
    });

    lightbox.addEventListener('click', () => {
        lightbox.classList.remove('active');
    });
}



