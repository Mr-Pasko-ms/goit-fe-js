let input;
let total = 0;

while (input !== null) {
  input = prompt('Введите любое число!');
  if (Number(input)) {
    total += Number(input);
  } else if (input === null) {
    break;
  } else {
    alert('Введено некорректное число!');
  }
}

alert(`Общая сумма чисел равна ${total}`);
