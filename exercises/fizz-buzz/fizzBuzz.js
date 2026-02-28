/**
 * EXERCISE 4 — FIZZBUZZ
 *
 * Return:
 *
 * - "Fizz" if number divisible by 3
 * - "Buzz" if divisible by 5
 * - "FizzBuzz" if divisible by both
 * - otherwise return the number itself
 *
 * Example:
 * fizzBuzz(3) -> "Fizz"
 * fizzBuzz(5) -> "Buzz"
 * fizzBuzz(15) -> "FizzBuzz"
 */

function fizzBuzz(n) {
    if (n % 3 === 0 && n % 5 === 0) {
        return 'FizzBuzz'
    } else if (n % 3 === 0) {
        return 'Fizz';
    } else if (n % 5 === 0) {
        return 'Buzz';
    } else {
        return n;
    }
}

module.exports = fizzBuzz;