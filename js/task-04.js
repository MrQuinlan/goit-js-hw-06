const buttonDecrementRef = document.querySelector('button[data-action="decrement"]');
const buttonIncrementRef = document.querySelector('button[data-action="increment"]');
const counterValueRef = document.querySelector('#value');

const counterValue = {
    value: 0,

    clickDecrement() {
        this.value -= 1;
    },

    clickIncrement() {
        this.value += 1;
    },
};

buttonDecrementRef.addEventListener('click', function () {
    counterValue.clickDecrement();
    counterValueRef.textContent = counterValue.value;
});

buttonIncrementRef.addEventListener('click', function () {
    counterValue.clickIncrement();
    counterValueRef.textContent = counterValue.value;
});
