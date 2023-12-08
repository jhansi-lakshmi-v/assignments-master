/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {

  if (str.length == 0) {
    return true;
  }

  let letterStr = [];
  let tmpStr = [];
  for (let i = 0; i < str.length; ++i) {
    if (/[a-zA-Z]/.test(str[i]) == true){
      letterStr.push(str[i].toLowerCase());
      tmpStr.push(str[i].toLowerCase());
    }
  }


  if (tmpStr.join("") == letterStr.reverse().join("")) {
    return true;
  }

  return false;
}

module.exports = isPalindrome;
