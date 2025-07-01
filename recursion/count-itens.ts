/**
 * Recursively count items from array.
 * @param number - The number to sum digits from
 * @returns The sum of elements
 */
function countItems(arr: number[]) {
  // Base case: if it's a empty array, return zero
  if (arr.length <= 0) {
    return 0;
  }

  arr.shift()
  return 1 + countItems(arr);
}

console.log(countItems([1, 2, 2, 1, 7, 6, 8]))