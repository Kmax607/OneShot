function typeEffect() {
    const title = document.getElementById("typing-title");
    const text = "One Shot Entertainment"; // Set your desired title text here
    let index = 0;

    if (!title) return;

    function typeChar() {
        const span = document.createElement("span");
        span.classList.add("letter");

        const char = text.charAt(index);
        span.textContent = char === " " ? "\u00A0" : char; // Preserve spaces
        span.style.animationDelay = `${index * 0.05}s`;
        title.appendChild(span);

        index++;

        if (index < text.length) {
            setTimeout(typeChar, 100);
        }
    }

    typeChar(); // Start the effect
}

document.addEventListener("DOMContentLoaded", typeEffect);
