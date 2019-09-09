const ADMIN_PASSWORD = 'jqueryismyjam';
let message = ``;

const userPassword = prompt(`Пожалуйста введите пароль:`);
if (userPassword === null) {
    message = `Отменено пользователем!`;
    alert(message);
} else if (userPassword === ADMIN_PASSWORD) {
    message = `Добро пожаловать!`;
    alert(message);
} else {
    message = `Доступ запрещен, неверный пароль!`;
    alert(message);
}

console.log(message);