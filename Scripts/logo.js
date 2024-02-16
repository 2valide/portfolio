const targetText = "hello world";
    const rotatingLetters = document.querySelectorAll('.rotating-letters');
    let currentIndex = 0;

    function rotateText() {
        rotatingLetters[currentIndex].textContent = targetText[currentIndex];
        currentIndex = (currentIndex + 1) % targetText.length;
    }

    setInterval(rotateText, 200); // Change letter every 200 milliseconds