document.addEventListener("DOMContentLoaded", () => {
    typeEffect();
    handleScrollFadeIn();

    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });
});

const text = "One Shot Entertainment";
let index = 0;

function typeEffect() {
    const title = document.getElementById("typing-title");

    if (!title) return;

    const span = document.createElement("span");
    span.classList.add("letter");

    const char = text.charAt(index);
    span.textContent = char === " " ? "\u00A0" : char; // Fix for space characters
    span.style.animationDelay = `${index * 0.05}s`;
    title.appendChild(span);

    index++;

    if (index < text.length) {
        setTimeout(typeEffect, 100);
    }
}

function handleScrollFadeIn() {
    const faders = document.querySelectorAll(".fade-in");
    faders.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", handleScrollFadeIn);
