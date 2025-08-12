// Menu Mobile Toggle
document.addEventListener("DOMContentLoaded", () => {
    const mobileMenuBtn = document.querySelector(".menu-mobile a");
    const mobileMenuList = document.querySelector(".menu-mobile .menu");

    mobileMenuBtn.addEventListener("click", (e) => {
        e.preventDefault();
        mobileMenuList.classList.toggle("active");
    });

    // Scroll suave nos links
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
            // Fecha o menu mobile após o clique
            if (mobileMenuList.classList.contains("active")) {
                mobileMenuList.classList.remove("active");
            }
        });
    });

    // Efeito nos cards ao passar o mouse
    document.querySelectorAll(".item").forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.transform = "scale(1.05)";
            card.style.transition = "transform 0.3s ease";
            card.style.boxShadow = "0 8px 20px rgba(0,0,0,0.3)";
        });
        card.addEventListener("mouseleave", () => {
            card.style.transform = "scale(1)";
            card.style.boxShadow = "none";
        });
    });

    // Animação no botão "Abrir Conta"
    const abrirContaBtn = document.querySelector(".btn-menu");
    abrirContaBtn.addEventListener("click", () => {
        abrirContaBtn.textContent = "Abrindo...";
        abrirContaBtn.style.backgroundColor = "#2e7d32";
        setTimeout(() => {
            window.location.href = "#contato";
            abrirContaBtn.textContent = "Abrir Conta";
            abrirContaBtn.style.backgroundColor = "#4CAF50";
        }, 1500);
    });
});
