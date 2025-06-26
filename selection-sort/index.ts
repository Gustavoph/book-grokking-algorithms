function findIndexOfMinimum(numbers: number[]): number {
  let minValue = numbers[0];
  let minIndex = 0;

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < minValue) {
      minValue = numbers[i];
      minIndex = i;
    }
  }

  return minIndex;
}

function selectionSort(unsortedArray: number[]): number[] {
  const remainingElements = [...unsortedArray];
  const sortedArray: number[] = [];

  for (let i = 0; i < unsortedArray.length; i++) {
    const minIndex = findIndexOfMinimum(remainingElements);
    sortedArray.push(remainingElements[minIndex]);
    remainingElements.splice(minIndex, 1);
  }

  return sortedArray;
}

console.log(selectionSort([9, 3, 5, 1, 10]));
