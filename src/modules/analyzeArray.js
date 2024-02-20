export function analyzeArray(array) {
  if (!Array.isArray(array)) throw new Error("Input is not an array");
  if (array.length === 0) throw new Error ("Array can't be empty")

  for (const element of array) {
    if (typeof element !== "number" || element === "")
      throw new Error("Array is not of only numbers");
  }

  const sum = array.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  const min = Math.min(...array);
  const max = Math.max(...array);

  return {
    average: sum / array.length,
    min,
    max,
    length: array.length,
  };
}
