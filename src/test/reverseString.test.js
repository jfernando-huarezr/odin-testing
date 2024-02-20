import reverseString from "../modules/reverseString.js";

test("only accepts strings", () => {
  const invalidInputs = [
    1234,
    ["a", "b", "c"],
    { a: 1 },
    null,
    undefined,
    true,
    "",
  ];
  invalidInputs.forEach((input) => {
    expect(() => reverseString(input)).toThrow();
  });
});

test("it should reverse", () => {
  expect(reverseString("alberto")).toBe("otrebla");
});
