document.addEventListener("DOMContentLoaded", function() {
    // Prevent context menu on images
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('contextmenu', function(e) {
            e.preventDefault();
        });
    });

    // Prevent dragging images
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('dragstart', function(e) {
            e.preventDefault();
        });
    });

    // Prevent text selection for the entire page
    document.addEventListener('selectstart', function(e) {
        e.preventDefault();
    });

    // Existing code for color changing and button effects
    const logo = document.getElementById('logo');
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    
    function getRandomStartingColorIndex() {
        return Math.floor(Math.random() * colors.length);
    }

    let startIndex = getRandomStartingColorIndex();
    const letters = logo.textContent.split('');
    logo.innerHTML = '';
    const spans = letters.map((letter, index) => {
        const span = document.createElement('span');
        const colorIndex = (startIndex + index) % colors.length;
        span.style.color = colors[colorIndex];
        span.textContent = letter;
        logo.appendChild(span);
        return span;
    });

    function updateColors() {
        startIndex = (startIndex + 1) % colors.length;
        spans.forEach((span, index) => {
            const colorIndex = (startIndex + index) % colors.length;
            span.style.color = colors[colorIndex];
        });
    }

    setInterval(updateColors, 100);

    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        const sound = new Audio('./assets/sound.mp3');

        const handlePress = () => {
            const img = button.querySelector('img');
            img.style.opacity = '0.75';
            sound.pause();
            sound.currentTime = 0;
            sound.play();
        };

        const handleRelease = () => {
            const img = button.querySelector('img');
            img.style.opacity = '1';
        };

        button.addEventListener('mousedown', handlePress);
        button.addEventListener('mouseup', handleRelease);
        button.addEventListener('mouseleave', handleRelease);
        button.addEventListener('touchstart', handlePress);
        button.addEventListener('touchend', handleRelease);
        button.addEventListener('touchcancel', handleRelease);
    });
});
