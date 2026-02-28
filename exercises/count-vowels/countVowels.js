/**
 * EXERCISE 5 — COUNT VOWELS
 *
 * Count how many vowels exist in a string.
 *
 * Vowels:
 * a e i o u
 *
 * Example:
 * "hello" -> 2
 * "AEIOU" -> 5
 *
 * Rules:
 * - Ignore uppercase and lowercase.
 */

function countVowels(str) {
    let quantVowels = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u'];

    for (i = 0; i < str.length; i+=1) {
        if (vowels.includes(str[i].toLowerCase())) {
            quantVowels += 1;
        }
    }
    return quantVowels;
}

module.exports = countVowels;