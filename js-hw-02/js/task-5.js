const dangerWords = ['spam', 'sale'];

function checkForSpam(str) {
  for (i = 0; i < dangerWords.length; i += 1) {
    if (str.toLowerCase().includes(dangerWords[i])) {
      return true;
    }
  }
  return false;
}

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
