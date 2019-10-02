function countProps(obj) {
  let number = 0;
  for (const key in obj) {
    number += 1;
  }
  return number;
}

console.log(countProps({})); // 0
console.log(countProps({ name: 'Mango', age: 2 })); // 2
console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3
