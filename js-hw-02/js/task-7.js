const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function (login) {
  if (login.length >= 4 && login.length <= 16) {
    return true;
  }
  return false;
};

const isLoginUnique = function (allLogins, login) {
  for (let i = 0; i < allLogins.length; i += 1) {
    if (allLogins.includes(login)) {
      return false;
    }
  }
  return true;
};

const addLogin = function (allLogins, login) {
  if (!isLoginValid(login)) {
    alert('Ошибка! Логин должен быть от 4 до 16 символов');
  } else
  if (isLoginUnique(allLogins, login)) {
    allLogins.push(login);
    alert('Логин успешно добавлен!');
    console.log(allLogins);
  } else {
    alert('Такой логин уже используется!');
  }
};

// Вызовы функции для проверки
addLogin(logins, 'Ajax'); // 'Логин успешно добавлен!'
addLogin(logins, 'robotGoogles'); // 'Такой логин уже используется!'
addLogin(logins, 'Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin(logins, 'jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
