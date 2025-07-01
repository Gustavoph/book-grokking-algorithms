
function quickSort(arr: number[]) {
  /* Base Case */
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0];
  const lessThanPivot: number[] = [];
  const greaterThanPivot: number[] = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= pivot) {
      lessThanPivot.push(arr[i]);
    } else {
      greaterThanPivot.push(arr[i]);
    }
  }

  return [...quickSort(lessThanPivot), pivot, ...quickSort(greaterThanPivot)];
}

const unsortedArray = [5, 2, 8, 1, 3, 7, 4, 6];
const sortedArray = quickSort(unsortedArray);
console.log(sortedArray);