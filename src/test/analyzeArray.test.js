import { analyzeArray } from "../modules/analyzeArray";

test("only accepts arrays as parameter", () => {
  const invalidInputs = [1234, "string", { a: 1 }, null, undefined, true, ""];
  invalidInputs.forEach((input) => {
    expect(() => analyzeArray(input)).toThrow();
  });
});

test("only accepts array of numbers", () => {
  expect(() => analyzeArray([1, 2, "better", 5, 6])).toThrow();
  expect(() => analyzeArray([])).toThrow();
  expect(() => analyzeArray([2, 6, 8, ""])).toThrow();
});

test("functionality ok", () => {
  expect(analyzeArray([1, 2, 3, 4, 5])).toStrictEqual({
    average: 3,
    min: 1,
    max: 5,
    length: 5,
  });
});
