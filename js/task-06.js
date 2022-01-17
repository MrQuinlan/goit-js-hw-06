const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', event => {
    event.currentTarget.value.length == inputRef.dataset.length
        ? inputRef.setAttribute('class', 'valid')
        : inputRef.setAttribute('class', 'invalid');
});
