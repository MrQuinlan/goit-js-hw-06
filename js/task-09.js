function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyRef = document.querySelector('body');
const textRef = document.querySelector('.color');
const buttonToChangeColor = document.querySelector('.change-color');

buttonToChangeColor.addEventListener('click', event => {
    bodyRef.style.backgroundColor = getRandomHexColor();
    textRef.textContent = getRandomHexColor();
});
