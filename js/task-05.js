const nameInputRef = document.querySelector('#name-input');
const nameOutputRef = document.querySelector('#name-output');

nameInputRef.addEventListener('input', event => {
    event.currentTarget.value === ''
        ? (nameOutputRef.textContent = 'Anonymous')
        : (nameOutputRef.textContent = event.currentTarget.value);
});
