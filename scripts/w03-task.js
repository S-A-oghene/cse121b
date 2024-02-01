/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
function add(number1, number2) {
    return number1 + number2;
}
/* Function Expression - Add Numbers */

function addNumbers() {
    const addNumber1 = Number(document.querySelector('#add1').value);
    const addNumber2 = Number(document.querySelector('#add2').value);
    const sum = add(addNumber1, addNumber2);
    document.querySelector('#sum').value = sum;
  }

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */

const subtract = function (number1, number2) {
    return number1 - number2;
};

const subtractNumbers = function () {
    const subtractNumber1 = Number(document.querySelector('#subtract1').value);
    const subtractNumber2 = Number(document.querySelector('#subtract2').value);
    const difference = subtract(subtractNumber1, subtractNumber2);
    document.querySelector('#difference').value = difference;
};

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */

const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
    const factor1 = Number(document.querySelector('#factor1').value);
    const factor2 = Number(document.querySelector('#factor2').value);
    const product = multiply(factor1, factor2);
    document.querySelector('#product').value = product;
};

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */

function divide(number1, number2) {
    return number1 / number2;
}

function divideNumbers() {
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);
    let quotient = divide(dividend, divisor);
    document.querySelector('#quotient').value = quotient;
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */
document.querySelector('#getTotal').addEventListener('click', function () {
    const subtotal = Number(document.querySelector('#subtotal').value);
    let total = subtotal;
    if (document.querySelector('#member').checked) {
      total *= 0.8;
    }
    document.querySelector('#total').textContent = `$${total.toFixed(2)}`;
  });

/* ARRAY METHODS - Functional Programming */
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

document.querySelector('#array').textContent = numbers.join(', ');

/* Output Odds Only Array */
const odds = numbers.filter(num => num % 2 !== 0);
document.querySelector('#odds').textContent = odds.join(', ');

/* Output Evens Only Array */
const evens = numbers.filter(num => num % 2 === 0);
document.querySelector('#evens').textContent = evens.join(', ');

/* Output Multiplied by 2 Array */
const sumOfArray = numbers.reduce((acc, num) => acc + num, 0);
document.querySelector('#sumOfArray').textContent = sumOfArray;

/* Output Sum of Org. Array */
const multiplied = numbers.map(num => num * 2);
document.querySelector('#multiplied').textContent = multiplied.join(', ');

/* Output Sum of Multiplied by 2 Array */
const sumOfMultiplied = numbers.map(num => num * 2).reduce((acc, num) => acc + num, 0);
document.querySelector('#sumOfMultiplied').textContent = sumOfMultiplied;