let input;
const userArray = [];
while (input !== null) {
  input = prompt('Введите элемент массива!');
  if (input === null) {
    break;
  } else {
    userArray.push(input);
  }
}
function showIndexAndElement(array) {
  for (let i = 0; i < array.length; i += 1) {
    console.log(`${(i + 1)} - ${array[i]}`);
  }
}
showIndexAndElement(userArray);
showIndexAndElement(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
showIndexAndElement([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
