const textElement = document.querySelector('.animated-text-1');

function toggleWritingMode() {
  textElement.classList.toggle('vertical-writing');
  textElement.classList.toggle('horizontal-writing');
}

// Trigger the toggle function after a delay
setTimeout(() => {
  toggleWritingMode();
}, 2000); // Change the delay as needed


function setRandomMaxFontSize() {
    var maxFontSize = Math.floor(Math.random() * 30) + 20; // Random value between 20 and 50
    document.documentElement.style.setProperty('--maxFontSize', maxFontSize + 'px');
  }

  // Change the random max font size every 5 seconds
  setInterval(setRandomMaxFontSize, 500);