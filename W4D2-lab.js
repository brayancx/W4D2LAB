function minusOne(num) {
    console.log (num - 1);
}
minusOne(10);
minusOne(100);
minusOne(Infinity);


function makeSentence(word1, word2, word3) {
    return `oh boy, do ${word1} ${word2} ${word3} or what?`;
  }
  makeSentence("I", "want", "chimichangas")
console.log(makeSentence("I", "want", "chimichangas"));


function getLastElement(arr) {
  if (arr.length > 0) {
    const lastElement = arr[arr.length - 1];
    console.log(lastElement);
  } else {
    console.log("Array is empty!");
  }
}
getLastElement([1, 2, 3, 4, 5, 6]);      
getLastElement(['a', 'b', 'c']);          
getLastElement([[1, 2, 3], [4, 5, 6]]);