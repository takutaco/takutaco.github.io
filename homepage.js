let words = ["Advanced", "Product"];
let currentIndex = 0;
let wordElement = document.getElementById('word');

setInterval(() => {
    currentIndex = (currentIndex + 1) % words.length;
    wordElement.textContent = words[currentIndex];
}, 2000);
