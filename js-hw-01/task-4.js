const credits = 23580;
const pricePerDroid = 3000;
let totalPrice = 0;

const userQuantity = prompt(`Пожалуйста введите количество товара:`);
if (userQuantity === null) {
    alert(`Отменено пользователем!`);
} else if (userQuantity > 0) {
    totalPrice = pricePerDroid * userQuantity;
} else {
    alert(`Вы ввели некорректное число!`);
}

if (totalPrice > credits) {
    alert(`Недостаточно средств на счету!`);
} else if (totalPrice === 0) {
    alert(`Вы не купили дроиды, на счету осталось ${credits} кредитов.`);
} else {
    alert(`Вы купили ${userQuantity} дроидов, на счету осталось ${credits-totalPrice} кредитов.`);
}