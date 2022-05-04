/*
Write a function `hasThreeVowels` that accepts a string as an argument.
The function should return a boolean indicating whether or not the string
contains at least three different vowels.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false

*/

function hasThreeVowels(str) {
  return (
    str
      .split("")
      .reduce(
        (uniqueVowels, char) =>
          "aeiou".includes(char) && !uniqueVowels.includes(char)
            ? uniqueVowels.concat(char)
            : uniqueVowels,
        []
      ).length >= 3
  );
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = hasThreeVowels;
} catch (e) {
  module.exports = null;
}
