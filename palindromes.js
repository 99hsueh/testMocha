function isPalindrome(s) {
  var stringNoSpace = s.split(/\s*/).join("");
  var stringReverse = stringNoSpace.split("").reverse().join("");
  // var stringJoin = stringReverse.split(" ").join("");
  console.log(stringReverse);
  return stringNoSpace === stringReverse;
}

module.exports = isPalindrome;

  // var stringReverse = stringNoSpace.split("").reverse().join("");
  // var stringJoin = stringReverse.split(" ").join("");


//// not working
//   function isPalindrome(s) {
//   var stringReverse = s.split("").reverse().join("");
//   var stringJoin = stringReverse.split(" ").join("");
//   console.log(stringJoin);
//   return s === stringJoin;
// }

// module.exports = isPalindrome;

