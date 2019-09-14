function findLongestWord(string) {
  const stringSplit = string.split(' ');
  let longestWord = '';
  let longestWordNumber = 0;
  for (let i = 0; i < stringSplit.length; i += 1) {
    if (stringSplit[i].length > longestWordNumber) {
      longestWordNumber = stringSplit[i].length;
      longestWord = stringSplit[i];
    }
  }
  return longestWord;
}
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
