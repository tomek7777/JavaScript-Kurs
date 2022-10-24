const inputCapital = document.getElementById("capital");
const inputRate = document.getElementById("rate");
const inputmCapital = document.getElementById("mCapital");
const inputYears = document.getElementById("years");
const inputfinalMoney = document.getElementById("finalMoney");

// let capital = inputCapital;
// let rate = inputRate;
// let mCapital = inputmCapital;
// let years = inputYears;

// let finalyMoney = capital * Math.pow((1+(rate/mCapital)), (mCapital*years));
// console.log(finalyMoney);

function calculateCompoundInterest(capital, rate, mCapital, years) {
    return capital * Math.pow((1+(rate/mCapital)), (mCapital*years));

};

document.getElementById("calculate").addEventListener("click", function () {
    let capital = inputCapital.value;
    let rate = inputRate.value;
    let mCapital = inputmCapital.value;
    let years = inputYears.value;

    let finalMoney = calculateCompoundInterest(capital, rate, mCapital, years);
    inputfinalMoney.value = finalMoney.toFixed(2);
});