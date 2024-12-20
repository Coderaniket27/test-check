function distinct(...arrays) {
  const freqMap = new Map();
  arrays.flat().forEach((num) => {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  });
  const result = [...freqMap.keys()].filter((num) => freqMap.get(num) === 1);
  return result;
}
const arr1 = [1, 2, 3];
const arr2 = [2, 3, 4];
const arr3 = [3, 4, 5];

console.log("Try programiz.pro", distinct(arr1, arr2, arr3));
