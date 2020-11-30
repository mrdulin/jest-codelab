export const calculateAverage = (array: Array<number>) => {
  // Check If Data Exists
  if (array.length >= 1) {
    // Total
    let total: number = 0;

    // Iterate Over Array
    let i: number = 0;
    while (i < array.length) {
      // Add To Total
      total += array[i];

      // Increase I
      i++;
    }

    return total / array.length;
  } else {
    // Error
    throw new Error('Error: Empty Array (calculateAverage)');
  }
};
