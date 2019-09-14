let input;
const numbers = [];
let total = 0;
while (input !== null) {
  input = prompt('Введите любое число!');
  if (input === null) {
    break;
  } else if (isFinite(input)) {
    numbers.push(input);
  } else {
    alert('Введено некорректное число!');
  }
}
console.log(numbers);
function totalArrayNumbers(array) {
  for (let i = 0; i < array.length; i += 1) {
    total += Number(array[i]);
  }
  console.log(`Общая сумма чисел равна - ${total}`);
}
totalArrayNumbers(numbers);
