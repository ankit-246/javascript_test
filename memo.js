const studentMarks = [70, 55, 38, 57, 98, 64, 77, 45, 55, 33];

// Mean calculation
const mean = studentMarks.reduce((sum, mark) => sum + mark, 0) / studentMarks.length;

// Median calculation
const sortedMarks = studentMarks.slice().sort((a, b) => a - b);
const midIndex = Math.floor(sortedMarks.length / 2);
const median = sortedMarks.length % 2 === 0
  ? (sortedMarks[midIndex - 1] + sortedMarks[midIndex]) / 2
  : sortedMarks[midIndex];

// Mode calculation
const countMap = {};
let maxCount = 0;
let mode;

studentMarks.forEach((mark) => {
  countMap[mark] = (countMap[mark] || 0) + 1;

  if (countMap[mark] > maxCount) {
    maxCount = countMap[mark];
    mode = mark;
  }
});

console.log("Mean:", mean);
console.log("Median:", median);
console.log("Mode:", mode);
