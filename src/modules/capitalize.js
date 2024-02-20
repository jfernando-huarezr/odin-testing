export default function capitalize(input) {
  if (typeof input !== "string" || input.length === 0)
    throw new Error("The input is not a string");

  return input.charAt(0).toUpperCase() + input.slice(1);
}
