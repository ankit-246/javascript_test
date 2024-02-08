const inputString = "Go Academy Get Set Go";

const result = inputString
  .split(" ")
  .map(word => word.charAt(0))
  .join("");

console.log(result); 
