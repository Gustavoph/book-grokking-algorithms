/**
 * Recursively sums all digits of a positive integer.
 * @param number - The number to sum digits from
 * @returns The sum of its digits
 */
function sumDigits(number: number): number {
  // Base case: if it's a single digit, return it
  if (number < 10) {
    return number;
  }

  const lastDigit = number % 10;
  const remainingDigits = Math.floor(number / 10);

  return lastDigit + sumDigits(remainingDigits);
}

console.log('Sum: ', sumDigits(1234));