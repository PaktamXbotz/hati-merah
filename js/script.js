document.addEventListener('DOMContentLoaded', () => {
    const changeColorButton = document.getElementById('changeColorButton');
    const heart = document.querySelector('.heart');

    changeColorButton.addEventListener('click', () => {
        const newColor = getRandomColor();
        heart.style.backgroundColor = newColor;
        heart.style.setProperty('--before-color', newColor);
        heart.style.setProperty('--after-color', newColor);
        changeColorButton.style.backgroundColor = newColor; // Change button color to match heart
    });

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
