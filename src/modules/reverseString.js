export default function reverseString(input) {
  if (typeof input !== "string" || input.length === 0)
    throw new Error("The input is not a string");

  const inputArr = input.split(" ");
  const reverseInputArr = inputArr.map((word) => {
    const splitWord = word.split("");
    return splitWord.reverse().join("");
  });

  return reverseInputArr.join(" ");
}
