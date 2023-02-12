let numDisplay = document.querySelector('#display');
let answerDisplay = document.querySelector('#answer');

let calcBtns = document.querySelectorAll('input[type="button"]');

for (let i = 0; i < calcBtns.length; i++) {
    let btn = calcBtns[i];
    btn.addEventListener('click', () => {
        if (btn.value === '=') {
            answerDisplay.value = eval(numDisplay.value);
        } else if (btn.value === 'C') {
            numDisplay.value = "";
            answerDisplay.value = "";
        } else if (btn.value === 'Del') {
            numDisplay = numDisplay.toString().slice(0, -1);
        } else {
            numDisplay.value += btn.value;
        }
    });
}

alert('Please send Fundss!!');