const arr = [5, -1, 1, 2, 8, -3];

function sumOfPositiveNumbers(array) {
  return array.reduce((sum, num) => (num > 0 ? sum + num : sum), 0);
}

const result = sumOfPositiveNumbers(arr);
console.log(result); 