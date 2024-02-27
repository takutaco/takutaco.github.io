function setRandomMaxFontSize() {
    var maxFontSize = Math.floor(Math.random() * 30) + 20;
    document.documentElement.style.setProperty('--maxFontSize', maxFontSize + 'px');
  }

  setInterval(setRandomMaxFontSize, 500);