/**
 * EXERCISE 6 — FIND MAX
 *
 * Return the biggest number inside an array.
 *
 * Example:
 * findMax([1,2,3]) -> 3
 * findMax([-10,5,0]) -> 5
 *
 * Rules:
 * - The array will always contain at least one number.
 */

function findMax(numbers) {
    let bigNumber = numbers[0];

    for (i = 1; i < numbers.length; i+=1) {
        if (bigNumber < numbers[i]) {
            bigNumber = numbers[i]
        }
    }
    return bigNumber;
}

module.exports = findMax;