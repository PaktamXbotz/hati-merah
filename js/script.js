document.addEventListener('DOMContentLoaded', () => {
    const changeColorButton = document.getElementById('changeColorButton');
    const heart = document.querySelector('.heart');

    changeColorButton.addEventListener('click', () => {
        heart.style.backgroundColor = getRandomColor();
        heart.style.setProperty('--before-color', getRandomColor());
        heart.style.setProperty('--after-color', getRandomColor());
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
