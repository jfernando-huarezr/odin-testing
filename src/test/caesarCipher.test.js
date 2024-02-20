import caesarCipher from "../modules/caesarCipher.js";

test("shifting is ok", () => {
  expect(caesarCipher("a", 1)).toBe("B");
  expect(caesarCipher("m", 3)).toBe("P");
  expect(caesarCipher("z", 2)).toBe("B");
  expect(caesarCipher("N", 4)).toBe("r");
});

test("only accepts strings as first parameter", () => {
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
    expect(() => reverseString(input, 2)).toThrow();
  });
});

test("only accepts integers as second parameter", () => {
  const invalidInputs = [
    "string",
    ["a", "b", "c"],
    { a: 1 },
    null,
    undefined,
    true,
    "",
    0.4,
  ];
  invalidInputs.forEach((input) => {
    expect(() => reverseString("abcde", input)).toThrow();
  });
});

test("Cipher respecting punctuation and case", () => {
  expect(caesarCipher("Alexander: The Great", 1)).toBe("bMFYBOEFS: uIF hSFBU");
});
