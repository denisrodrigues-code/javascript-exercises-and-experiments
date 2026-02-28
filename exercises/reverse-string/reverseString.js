/**
 * EXERCISE 2 — REVERSE STRING
 *
 * Create a function that reverses a string.
 *
 * Example:
 * reverseString("abc") -> "cba"
 * reverseString("javascript") -> "tpircsavaj"
 *
 * Rules:
 * - Return a new reversed string.
 */

function reverseString(str) {
    let newWord = "";
    
    for (i = str.length - 1; i >= 0; i-=1) {
        newWord += str[i];
    }
    return newWord;
}

module.exports = reverseString;