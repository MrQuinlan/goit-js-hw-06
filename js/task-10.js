function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputRef = document.querySelector('#controls input');
const btnCreateRef = document.querySelector('button[data-create]');
const btnDestroyRef = document.querySelector('button[data-destroy]');
const boxesRef = document.querySelector('#boxes');

const createBoxes = amount => {
    const boxesArr = [];

    for (let i = 1; i <= amount; i += 1) {
        const makeDiv = document.createElement('div');
        makeDiv.style.backgroundColor = getRandomHexColor();
        makeDiv.style.width = i * 10 + 20 + 'px';
        makeDiv.style.height = i * 10 + 20 + 'px';

        boxesArr.push(makeDiv);
    }

    boxesRef.append(...boxesArr);
};

btnCreateRef.addEventListener('click', () => {
    createBoxes(inputRef.value);
});

btnDestroyRef.addEventListener('click', () => {
    boxesRef.innerHTML = '';
    inputRef.value = '';
});
