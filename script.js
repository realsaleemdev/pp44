const increaseButtonEl = document.querySelector(".counter_button--increase");
const decreaseButtonEl = document.querySelector(".counter_button--decrease");
const counterValueEl = document.querySelector(".counter_value");
const resetButtonEl = document.querySelector(".counter_reset-button");

if (!increaseButtonEl || !decreaseButtonEl || !counterValueEl || !resetButtonEl) {
    console.error("Counter elements not found. Check class names in HTML and selectors in JS.");
} else {
    resetButtonEl.addEventListener("click", function () {
        counterValueEl.textContent = 0;
    });

    decreaseButtonEl.addEventListener("click", function () {
        let currentValueAsNumber = Number(counterValueEl.textContent);
        let newValue = currentValueAsNumber - 1;
        if (newValue < 0) {
            newValue = 0;
        }
        counterValueEl.textContent = newValue;
    });

    increaseButtonEl.addEventListener("click", function () {
        let currentValueAsNumber = Number(counterValueEl.textContent);
        let newValue = currentValueAsNumber + 1;
        if (newValue > 5) {
            newValue = 5;
        }
        counterValueEl.textContent = newValue;
    });
}