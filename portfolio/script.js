// Attendre que la page charge
document.addEventListener("DOMContentLoaded", function () {

    // Scroll doux pour les liens
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // Bouton vers projets
    const btn = document.querySelector(".btn");
    if (btn) {
        btn.addEventListener("click", function () {
            const projects = document.querySelector("#projects");
            if (projects) {
                projects.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    }

    // Animation au scroll
    const cards = document.querySelectorAll(".card");

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, {
        threshold: 0.2
    });

    cards.forEach(card => {
        observer.observe(card);
    });

});