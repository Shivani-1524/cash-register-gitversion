const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given")
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const numofnotes = document.querySelectorAll(".no-of-notes");
const nextButton = document.querySelector("#next-button");
const hiddenUntilNext = document.querySelector(".hiddenUntilNext");
const hiddenUntilCheck = document.querySelector(".hiddenUntilCheck");

const availableValues = [2000, 500, 100, 20, 10, 5, 1];

hiddenUntilNext.style.display = "none";
hiddenUntilCheck.style.display = "none";

nextButton.addEventListener("click", () => {
    if (billAmount.value) {
        if (billAmount.value > 0) {
            hideMessage();
            hiddenUntilNext.style.display = "block";
            nextButton.style.display = "none";
        } else {
            showMessage("Enter a valid bill amount to proceed")
        }

    } else {
        showMessage("Enter a bill amount to proceed");
    }

})

checkButton.addEventListener("click", () => {

    hideMessage();
    if ((!isNaN(billAmount.value) && !isNaN(cashGiven.value)) && (billAmount.value > 0 && cashGiven.value > 0)) {
        hiddenUntilCheck.style.display = "none";
        if (billAmount.value > 0) {
            hiddenUntilCheck.style.display = "none";
            if ((cashGiven.value - billAmount.value) > 0) {
                hiddenUntilCheck.style.display = "block";
                const amountReturned = cashGiven.value - billAmount.value;
                calculateChange(amountReturned);
            }
            else {
                showMessage("The cash provided should be greater than bill amount");
            }
        } else {
            showMessage("invalid bill amount");
        }
    }
    else {
        showMessage("Enter a valid value");
    }
});

const hideMessage = () => message.style.display = "none";

const showMessage = (messageText) => {
    message.style.display = "block";
    message.innerText = messageText;
}

const calculateChange = (amount) => {
    for (let i = 0; i < availableValues.length; i++) {
        const numberOfNotes = Math.trunc(amount / availableValues[i]);
        amount %= availableValues[i];
        numofnotes[i].innerText = numberOfNotes;
    }
}

