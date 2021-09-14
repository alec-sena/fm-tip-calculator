let bill = 0.00;
let people = 0;
let tipFactor = 0.00;

const calculateTip = () => {
    let tip = bill * tipFactor
    return tip.toFixed(2);
}

const calculateTipPerPerson = () => {
    return calculateTip() / people;
}

const calculateTotal = () => {
    let total = parseFloat(bill + calculateTip(bill, tipFactor));
    return total.toFixed(2);
}

const calculateTotalPerPerson = () => {
    return calculateTotal() / people;
}

const tipPerPerson = document.getElementById("tip-per-person");
const totalPerPerson = document.getElementById("total-per-person");
const peopleError = document.getElementById("people-error");

const updateAll = () => {
    let tipText = !isFinite(calculateTipPerPerson()) || isNaN(calculateTipPerPerson()) ? '0.00' : calculateTipPerPerson().toFixed(2);
    let totalText = !isFinite(calculateTotalPerPerson()) || isNaN(calculateTotalPerPerson()) ? '0.00' : calculateTotalPerPerson().toFixed(2);
    tipPerPerson.innerText = `$${tipText}`;
    totalPerPerson.innerText = `$${totalText}`;
}

const billInput = document.getElementById("bill");


billInput.addEventListener("change", (e) => {
    bill = e.target.value;
    updateAll();
});

const numPeopleInput = document.getElementById("people");


numPeopleInput.addEventListener("change", (e) => {
    people = e.target.value;

    if(people == 0 && peopleError.classList.contains("hidden")){ 
        peopleError.classList.remove("hidden");
    } else {
        peopleError.classList.add("hidden");
    }

    updateAll();
});


const buttons = {
    fivePercent: document.getElementById("five-percent"),
    tenPercent: document.getElementById("ten-percent"),
    fifteenPercent: document.getElementById("fifteen-percent"),
    twentyFivePercent: document.getElementById("twenty-five-percent"),
    fiftyPercent: document.getElementById("fifty-percent")
};

buttons.fivePercent.addEventListener("click", () => {
    tipFactor = 0.05;
    updateAll();
});

buttons.tenPercent.addEventListener("click", () => {
    tipFactor = 0.10;
    updateAll();
});

buttons.fifteenPercent.addEventListener("click", () => {
    tipFactor = 0.15;
    updateAll();
});

buttons.twentyFivePercent.addEventListener("click", () => {
    tipFactor = 0.25;
    updateAll();
});

buttons.fiftyPercent.addEventListener("click", () => {
    tipFactor = 0.5;
    updateAll();
});

const customTip = document.getElementById("custom-percent");
customTip.addEventListener("change", (e) => {
    tipFactor = 0.01 * e.target.value;
    updateAll();
});

const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", () => {
    bill = 0.00;
    people = 0;
    tipFactor = 0.00;
    billInput.value = 0.00;
    numPeopleInput.value = 1;
    customTip.value = 0;
    updateAll();
})