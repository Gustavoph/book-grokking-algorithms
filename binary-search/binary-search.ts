/**
 * Binary Search - ordered list
 */

function binarySearch(arr: number[], target: number): number | null {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((right + left) / 2);
    let guess = arr[mid];

    if (guess === target) {
      return guess;
    } else if (guess > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return null;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(binarySearch(arr, 1));
console.log(binarySearch(arr, -1));