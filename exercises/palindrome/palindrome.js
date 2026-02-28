/**
 * EXERCISE 3 — PALINDROME
 *
 * Check if a word is a palindrome.
 * A palindrome reads the same backwards.
 *
 * Example:
 * "ana" -> true
 * "hello" -> false
 *
 * Rules:
 * - Ignore uppercase and lowercase.
 */
function reverseString(str) {
    let newStr = '';
    for (i = str.length - 1; i >= 0; i-=1){
        newStr += str[i];
    }    
    return newStr;
}

function isPalindrome(word) {
    return word.toLowerCase() === reverseString(word).toLowerCase();
}

module.exports = isPalindrome;