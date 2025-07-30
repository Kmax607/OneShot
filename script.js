const text = "One Shot Entertainment";
const title = document.getElementById("typing-title");
let index = 0;

// Split the text into words and track which word/char we're on
const words = text.split(" ");
let wordIndex = 0;
let charIndex = 0;
let globalCharIndex = 0;

function typeEffect() {
    if (!title) return;

    // Create a span for the current word (once)
    if (charIndex === 0) {
        const wordSpan = document.createElement("span");
        wordSpan.className = "word";
        wordSpan.style.whiteSpace = "nowrap";
        title.appendChild(wordSpan);
    }

    const currentWordSpan = title.lastChild;
    const currentWord = words[wordIndex];
    const letter = currentWord.charAt(charIndex);

    const span = document.createElement("span");
    span.classList.add("letter");
    span.textContent = letter;
    span.style.animationDelay = `${globalCharIndex * 0.05}s`;
    currentWordSpan.appendChild(span);

    charIndex++;
    globalCharIndex++;

    if (charIndex >= currentWord.length) {
        // Add a non-breaking space after the word
        currentWordSpan.appendChild(document.createTextNode('\u00A0'));
        wordIndex++;
        charIndex = 0;
    }

    if (wordIndex < words.length) {
        setTimeout(typeEffect, 100);
    }
}

// ✅ Start the typing effect
typeEffect();
