/*

Write a function `hipsterfy(sentence)` that takes in a sentence string and
returns the sentence where every word is missing it's last vowel.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'

*/

function removeLastVowel(str) {
  for (let i = str.length - 1; i >= 0; i--) {
    if ("aeiou".includes(str[i])) return str.slice(0, i) + str.slice(i + 1);
  }
}

function hipsterfy(sentence) {
  return sentence
    .split(" ")
    .map((word) => removeLastVowel(word))
    .join(" ");
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = hipsterfy;
} catch (e) {
  module.exports = null;
}
