document.addEventListener("DOMContentLoaded", () => {
    // Smooth Scroll Effect - Remove duplicate
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Stack Container Spread Effect
    const stackContainer = document.querySelector('.stack-container');
    if (stackContainer) {
        stackContainer.addEventListener('click', () => {
            stackContainer.classList.toggle('spread');
        });
    }
});



