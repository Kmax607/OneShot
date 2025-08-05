document.addEventListener("DOMContentLoaded", () => {
    typeEffect();
    handleScrollFadeIn();

});

const text = "One Shot Entertainment";
let index = 0;

function typeEffect() {
    const title = document.getElementById("typing-title");
    if (!title) return;

    const words = text.split(" ");
    let wordIndex = 0;
    let charIndex = 0;
    let wordSpan = null;

    function typeNextChar() {
        const currentWord = words[wordIndex];

        if (charIndex === 0) {
            // Create a new span for each word
            wordSpan = document.createElement("span");
            wordSpan.classList.add("word");
            title.appendChild(wordSpan);
        }

        const char = currentWord.charAt(charIndex);
        const letterSpan = document.createElement("span");
        letterSpan.classList.add("letter");
        letterSpan.textContent = char;
        letterSpan.style.animationDelay = `${index * 0.05}s`;
        wordSpan.appendChild(letterSpan);

        charIndex++;
        index++;

        if (charIndex < currentWord.length) {
            setTimeout(typeNextChar, 100);
        } else {
            charIndex = 0;
            wordIndex++;
            if (wordIndex < words.length) {
                // Add non-breaking space between words
                const space = document.createTextNode("\u00A0");
                title.appendChild(space);
                setTimeout(typeNextChar, 100);
            }
        }
    }

    typeNextChar();
}

window.addEventListener("scroll", handleScrollFadeIn);
window.addEventListener("load", handleScrollFadeIn);