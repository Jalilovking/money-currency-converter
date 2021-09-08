form.addEventListener('submit', function(e){
    e.preventDefault();

    let inputValue = +input.value.trim()
    let selectValue = toSelect.value.trim();
    const usd = 10670;
    const rub = 140;
    const eur = 12700;
    const gbp = 14770;
    const jpy = 97;
    const chf = 11700;
    let outputValue;
    if (inputValue){
        if (selectValue == 'toUsd') {
            outputValue = inputValue * usd; 
        }
        else if (selectValue == 'toRub') {
            outputValue = inputValue * rub;
        }
        else if (selectValue == 'toEur') {
            outputValue = inputValue * eur;
        }
        else if (selectValue == 'toEur') {
            outputValue = inputValue * eur;
        }
        else if (selectValue == 'toGbp') {
            outputValue = inputValue * gbp;
        }
        else if (selectValue == 'toJpy') {
            outputValue = inputValue * jpy;
        }
        else if (selectValue == 'toChf') {
            outputValue = inputValue * chf;
        }
    }
    else {
        outputValue = 'There is a problem. Please enter a number!!!'
    }
    text.textContent = Math.round(outputValue * 100)/100;

    input.value = '' // null
})