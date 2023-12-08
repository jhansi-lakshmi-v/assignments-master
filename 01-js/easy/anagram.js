/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // Is not an anagram if their lengths are not the same;
  if (str1.length != str2.length) {
    return false;
  }

  //Will first convert the strings to lower case, the copies the individual characters to an array, sorts the array, and 
  // forms a string again from the by the join() method and compares the two strings
  if (str1.toLowerCase().split("").sort().join("") == str2.toLowerCase().split("").sort().join(""))
  {
    return true;
  }
  return false;

}


module.exports = isAnagram;
