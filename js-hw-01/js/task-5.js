let userCountry = prompt(`Пожалуйста введите вашу страну:`);

if (userCountry === null || userCountry === ``) {
  alert(`Вы ввели страну некорректно!`);
} else {
  userCountry =
    userCountry[0].toUpperCase() + userCountry.slice(1).toLowerCase();
  switch (userCountry) {
    case `Китай`:
      alert(`Доставка в ${userCountry} будет стоить 100 кредитов.`);
      break;
    case `Чили`:
      alert(`Доставка в ${userCountry} будет стоить 250 кредитов.`);
      break;
    case `Австралия`:
      alert(`Доставка в ${userCountry} будет стоить 170 кредитов.`);
      break;
    case `Индия`:
      alert(`Доставка в ${userCountry} будет стоить 80 кредитов.`);
      break;
    case `Ямайка`:
      alert(`Доставка в ${userCountry} будет стоить 120 кредитов.`);
      break;
    default:
      alert(`В вашей стране доставка не доступна!`);
      break;
  }
}

console.log(userCountry);
