const loginFormRef = document.querySelector('.login-form');

loginFormRef.addEventListener('submit', event => {
    event.preventDefault();
    const {
        elements: { email, password },
    } = event.currentTarget;

    if (email.value !== '' && password.value !== '') {
        const userData = {
            email: email.value,
            password: password.value,
        };
        event.currentTarget.reset();
        console.log(userData);
    } else {
        alert('All fields are required!');
    }
});
