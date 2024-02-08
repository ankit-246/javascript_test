const arr = [
    ["bob", "rat", "dog"],
    ["bab", "mat", "dog"],
    ["beb", "cat", "gog"],
    ["bob", "cat", "pog"],
    ["obb", "tat", "gog"],
  ];
  
  const flattenedArray = arr.flat();
  console.log(flattenedArray);
//  const wordCount = flattenedArray.reduce((countMap, word) => {
//     countMap[word] = (countMap[word] || 0) + 1;
//     return countMap;
//   }, {});
  
//   console.log(wordCount);